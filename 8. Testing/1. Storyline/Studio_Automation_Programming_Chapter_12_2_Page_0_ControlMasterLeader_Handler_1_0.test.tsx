//#region Imports

//#region BaseDI

//0. SCRIPT
import * as Action_12_2_1_0 from "../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0 from "../../0. Script/Extensions/12/Other/3/Web Development/Method/0/1_0/Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0";

import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

//1. STORYLINE
import * as Implement_DesignPattern_Factory_Storer_12_2_1_0 from "../../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";
import * as Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

//5. CHAPTER
import * as ChapterPage_Page_2_1_Begin_Process_12_2_1_0 from "../../5. Chapter/12/Other/2/Programming/Page/2/1_0/Page_2_1_Begin_Process_12_2_1_0";

//6. STATE
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 from "../../6. State/12/Other/2/Programming/Repository/2/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0";

    //12-3 - WEB DEVELOPMENT
    import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0 from "../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/1/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0.json";
    import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0_P1_0 from "../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/1/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0-P1_0.json";
import { AssertionError } from "assert";

//#endregion

//#region NodeJS

const importedFileManager_VendorNodeJS = require('fs');

//#endregion

//#endregion

//#region 1. Assign

//CLIENT/SERVER
let _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

//SETTINGS

//DATASETS
let _storedOutputResponseData: any;

//MISC

//PLUMBING
let _storedProcessRequestCentralizedStorer: Implement_DesignPattern_Factory_Storer_12_2_1_0.BaseDI.Professional.Story.Programming_0.Implement_DesignPattern_Factory_Storer_12_2_1_0 = null;
let _storedProcessRequestLocalCacheDataRepository: ChapterPage_Page_2_1_Begin_Process_12_2_1_0.BaseDI.Professional.Chapter.Page.Programming_2.Page_2_1_Begin_Process_12_2_1_0;
let _storedProcessRequestTracker: object;

//#endregion

//#region 2. Ready

beforeEach(() => {
    //#region 1. INPUTS

    //#region DEFINE control variables

    //#endregion

    //#region DEFINE input variables


    //#endregion

    //#region DEFINE process variables



    //#endregion

    //#region DEFINE output variables

    //#endregion

    ///////////////////////////////

    //#region MEMORIZE control variables

    //#region MEMORIZE control xxx xxx


    //#endregion

    //#endregion

    //#region MEMORIZE input variables

    //#region MEMORIZE input xxx xxxx


    //#endregion

    //#endregion

    //#region MEMORIZE process variables

    //#region MEMORIZE process request settings

    _storedProcessRequestTracker = new Object();

    _storedProcessRequestTracker["storedProcessRequestIgnoreDeveloperConsoleLog"] = false;
    _storedProcessRequestTracker["storedProcessRequestSettings"] = {
        NODE_ENV: "development",
        PORT: 0,
        APP_ENV: "SERVER",
        APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR
        APP_SETTING_DEVELOPER_MODE: true,
        APP_SETTING_DEVELOPER_MODE_SILENT: false
    }

    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

    //#endregion

    //#endregion

    //#region MEMORIZE output variables

    //#region MEMORIZE output xxx xxx

    //#endregion

    //#endregion

    //#endregion

    //#region 2. PROCESS

    //#region EXECUTE process defaults

    //#region IDEAL CASE - USE defaults handler


    //#endregion

    //#endregion

    //#endregion

    //#region 3. OUTPUT

    //#region HANDLE execution response

    //#region IDEAL CASE - USE baseDI data


    //#endregion

    //#endregion    

    //#endregion
});

//#endregion

//#region 3. Set

//#endregion

//#region 4. Action

const ExecuteTransportRequest = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any> => {
    //#region 1. INPUTS

    //#region DEFINE control variables

    //#endregion

    //#region DEFINE input variables


    //#endregion

    //#region DEFINE process variables


    //#endregion

    //#region DEFINE output variables

    let storedOutputResponseData: any = null;
    let storedOutputResponseProcess: any = null;

    //#endregion

    ///////////////////////////////////////////////////////////

    //#region MEMORIZE control variables

    //#region MEMORIZE control xxx xxx

    //#endregion

    //#endregion

    //#region MEMORIZE input variables

    //#region MEMORIZE input xxx xxxx


    //#endregion

    //#endregion

    //#region MEMORIZE process variables

    //#region MEMORIZE process test variables

    let storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

    //0. CONTROLLERS    
    storedInputs.Parameters.setValue("parameterControlRequestClientOrServer", this);

    //1. INPUTS
    storedInputs.Parameters.setValue("parameterInputRequestActionName", Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_HTTP_Request_1_0);
    storedInputs.Parameters.setValue("parameterInputRequestName", parameterInputs.Parameters.getValue("parameterInputRequestName"));
    storedInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey"));

    //2. PROCESS
    storedInputs.Parameters.setValue("parameterProcessRequestCallBack", null);
    storedInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
    storedInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);

    storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", null);
    storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails_Parameters", null);
    storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails_CallBack", null);

    //SET DURING TESTING ONLY
    //storedInputs.Parameters.setValue("parameterProcessRequestByName", parameterInputs.Parameters.getValue("parameterInputRequestName"));
    
    //3. OUTPUTS
    storedInputs.Parameters.setValue("parameterOutputResponseControlID", "");

    //#endregion

    //#endregion

    //#region MEMORIZE output variables

    //#region MEMORIZE output xxx xxxx

    //#endregion

    //#endregion

    //#endregion

    //#region 2. PROCESS

    //#region HANDLE application defaults

    //#region IDEAL CASE - USE baseDI transporter

    const Action = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
        storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Story.Programming_0.Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(storedInputs))
            .SetupStoryline(parameterInputs)
            .Action();
    }

    Action(storedInputs);
 
    //#endregion

    //#endregion

    //#endregion

    //#region 3. OUTPUT

    //#region HANDLE execution response

    //#region IDEAL CASE - USE baseDI data

    return storedOutputResponseData;

    //#endregion

    //#endregion    

    //#endregion
}

describe('Web Development Handler Test', () => {
    test('1. Web Development - Transport Test - Transport Request to Web Development Handler', async () => {
        //#region 1. INPUTS

        //#region DEFINE control variables

        //#endregion

        //#region DEFINE input variables


        //#endregion

        //#region DEFINE process variables



        //#endregion

        //#region DEFINE output variables

        let storedOutputResponseData: any = null;

        //#endregion

        ///////////////////////////////

        //#region MEMORIZE control variables

        //#region MEMORIZE control xxx xxx


        //#endregion

        //#endregion

        //#region MEMORIZE input variables

        //#region MEMORIZE input xxx xxxx


        //#endregion

        //#endregion

        //#region MEMORIZE process variables

        //#region MEMORIZE process test variables

        let storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

        storedInputs.Parameters.setValue("parameterInputRequestName", "Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0");
        storedInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", "Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0-P1_0")

        //#endregion

        //#endregion

        //#region MEMORIZE output variables

        //#region MEMORIZE output xxx xxx


        //#endregion

        //#endregion

        //#endregion

        //#region 2. PROCESS

        //#region EXECUTE process defaults

        //#region IDEAL CASE - USE baseDI extension

        storedOutputResponseData = await ExecuteTransportRequest(storedInputs);

        //#endregion

        //#endregion

        //#endregion

        //#region 3. OUTPUT

        //#region HANDLE execution response

        //#region IDEAL CASE - USE baseDI data

        try {
            if (_storedProcessRequestTracker != null && _storedProcessRequestTracker != undefined) {
                switch (_storedProcessRequestTracker["storedProcessRequestHandlerName"].toUpperCase()) {
                    case storedInputs.Parameters.getValue("parameterInputRequestName").toUpperCase():
                        console.log("SUCCESSFULLY found request handler " + storedInputs.Parameters.getValue("parameterInputRequestName"));

                        return true;
                    default:
                        return false;
                }
            }

        }
        catch (storedProcessRequestMistake) {
            console.log(storedProcessRequestMistake.message);
        }

        //#endregion

        //#endregion    

        //#endregion
    })
});
//#endregion