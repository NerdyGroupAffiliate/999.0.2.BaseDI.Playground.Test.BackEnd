//#region Imports

//#region BaseDI

import * as Action_12_2_1_0 from "../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//12-3 - WEB DEVELOPMENT
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0 from "../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/1/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0_P1_0 from "../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/1/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0-P1_0.json";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0 from "../../0. Script/Extensions/12/Other/3/Web Development/Method/0/1_0/Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0";

import * as Implement_DesignPattern_Factory_Storer_12_2_1_0 from "../../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";
import * as ChapterPage_Page_2_1_Begin_Process_12_2_1_0 from "../../5. Chapter/12/Other/2/Programming/Page/2/1_0/Page_2_1_Begin_Process_12_2_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 from "../../6. State/12/Other/2/Programming/Repository/2/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0";

//#endregion

//#endregion

describe('Web Development Test', () => {
    test('Test JSON to HTML Conversion', () =>
    {
        //#region 1. INPUTS

        //#region DEFINE control variables

        //#endregion

        //#region DEFINE input variables

        let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //#endregion

        //#region DEFINE process variables

        let storedProcessRequestCentralizedStorer: Implement_DesignPattern_Factory_Storer_12_2_1_0.BaseDI.Professional.Story.Programming_0.Implement_DesignPattern_Factory_Storer_12_2_1_0 = null;
        let storedProcessRequestDataRepository: ChapterPage_Page_2_1_Begin_Process_12_2_1_0.BaseDI.Professional.Chapter.Page.Programming_2.Page_2_1_Begin_Process_12_2_1_0;

        //#endregion

        //#region DEFINE output variables

        let storedOutputResponseData: any;

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

        //#region MEMORIZE process request settings

        let storedProcessRequestTracker: object = new Object();

        storedProcessRequestTracker["storedProcessRequestIgnoreDeveloperConsoleLog"] = false;
        storedProcessRequestTracker["storedProcessRequestSettings"] = {
            NODE_ENV: JSON.stringify("development"),
            PORT: JSON.stringify(0),
            APP_ENV: JSON.stringify("SERVER"),
            APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER: JSON.stringify("LOCAL_FILE"), //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR
            APP_SETTING_DEVELOPER_MODE: JSON.stringify(true),
            APP_SETTING_DEVELOPER_MODE_SILENT: JSON.stringify(false)
        }
        storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

        //#endregion

        //#region MEMORIZE process test variables

        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

        //0. CONTROLLERS

        //1. INPUTS
        storedInputs.Parameters.setValue("parameterInputRequestActionName", Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_HTTP_Request_1_0);
        storedInputs.Parameters.setValue("parameterInputRequestName", "Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0");
        storedInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", "Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0-P1_0");

        //2. PROCESS
        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
    
        storedInputs.Parameters.setValue("parameterProcessRequestExtraData", null);

        storedProcessRequestCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0.BaseDI.Professional.Story.Programming_0.Implement_DesignPattern_Factory_Storer_12_2_1_0(storedInputs);

        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedDisturber", null);
        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedSensor", null);
        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);

        storedProcessRequestDataRepository = new ChapterPage_Page_2_1_Begin_Process_12_2_1_0.BaseDI.Professional.Chapter.Page.Programming_2.Page_2_1_Begin_Process_12_2_1_0(storedInputs);
        storedProcessRequestDataRepository.Repository = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0.BaseDI.Professional.State.Programming_2.LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0(storedInputs);

        const ExecuteConversionRequest = async () => {
            storedOutputResponseData = await storedProcessRequestDataRepository.Action();

            return storedOutputResponseData.StorylineDetails;
        }

        storedOutputResponseData = ExecuteConversionRequest();

        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedOutputResponseData);


        //3. OUTPUTS


        //#endregion

        //#endregion

        //#region MEMORIZE output variables

        //#region MEMORIZE output xxx xxxx

        //#endregion

        //#endregion

        //#endregion

        //#region 2. PROCESS

        //#region HANDLE application defaults

        //#region IDEAL CASE - USE baseDI converted

       
       
        storedOutputResponseData = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_0_0_Framework_Convert_HtmlToJSON_1_0(storedInputs);

        //#endregion

        //#endregion

        //#endregion

        //#region 3. OUTPUT

        //#region HANDLE execution response

        console.log(storedOutputResponseData);

        //#endregion

        //#endregion
    })
});

