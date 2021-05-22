//#region Imports

//#region BaseDI

//0. SCRIPT
import * as Action_12_2_1_0 from "../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//1. STORYLINE
import * as Implement_DesignPattern_Factory_Storer_12_2_1_0 from "../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";
import * as Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

//5. CHAPTER
import * as ChapterPage_Page_2_1_Begin_Process_12_2_1_0 from "../5. Chapter/12/Other/2/Programming/Page/2/1_0/Page_2_1_Begin_Process_12_2_1_0";

//6. STATE
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 from "../6. State/12/Other/2/Programming/Repository/2/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0";

//#endregion

//#endregion

//#region 1. Assign

//CLIENT/SERVER

//SETTINGS

//DATASETS


//MISC

//PLUMBING


//#endregion

//#region 2. Ready



//#endregion

//#region 3. Set

//#endregion

//#region 4. Action

//#region 1. EXECUTE store static test variable process

//#region IDEA CASE - USE default values

export const Action = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any> => {
    //#region 1. INPUTS

    //#region DEFINE control variables

    //#endregion

    //#region DEFINE input variables


    //#endregion

    //#region DEFINE process variables

    let storedProcessRequestDataRepository: ChapterPage_Page_2_1_Begin_Process_12_2_1_0.BaseDI.Professional.Chapter.Page.Programming_2.Page_2_1_Begin_Process_12_2_1_0;

    //#endregion

    //#region DEFINE output variables

    let storedOutputResponseData: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;
    let storedOutputResponseDataRepository: any = null;

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

    let storedProcessRequestTracker: Object = new Object();

    storedProcessRequestTracker["storedProcessRequestIgnoreDeveloperConsoleLog"] = false;
    storedProcessRequestTracker["storedProcessRequestSettings"] = {
        NODE_ENV: "development",
        PORT: 0,
        APP_ENV: "CLIENT",
        APP_SETTING_CONVERSION_MODE: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_1_1_ADVERTISING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_2_1_BLOGGING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_2_2_PODCASTING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_2_3_SOCIALMEDIA_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_2_4_ECOMMERCE_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_3_1_LISTBUILDING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_4_1_PRODUCT_SUPPLEMENTS_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_4_2_PRODUCT_NUTRITION_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_5_1_PRODUCT_COACHING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR            
        APP_SETTING_CONVERSION_MODE_5_2_PRODUCT_CONSULTING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_5_3_PRODUCT_PERSONALTRAINING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_6_1_PRODUCT_SOFTWARE_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_7_1_PRODUCT_AFFILIATEREVENUE_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_8_1_ACCOUNTING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_9_1_CUSTOMERSERVICE_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_10_1_PRODUCTIVITY_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_11_1_RISKMANAGEMENT_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_12_1_CAREERSEMPLOYMENT_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_12_4_CMS_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_12_5_SECURITY_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_CONVERSION_MODE_12_6_MANAGEMENT_NICHE_MASTER: "LOCAL_FILE", //OPTIONS = LOCAL_FILE, LOCAL_DATABASE, LOCAL_SERVICE, REMOTE_FILE, REMOTE_DATABASE, REMOTE_SERVICE, REMOTE_SERVICE_VENDOR 
        APP_SETTING_DEVELOPER_MODE: true,
        APP_SETTING_DEVELOPER_MODE_SILENT: false
    }

    storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

    //#endregion

    //#region MEMORIZE process test variables

    //0. CONTROLLERS

    if (!parameterInputs.Parameters.containsKey("parameterControlRequestClientOrServer") || parameterInputs.Parameters.getValue("parameterControlRequestClientOrServer") == undefined) {
        parameterInputs.Parameters.setValue("parameterControlRequestClientOrServer", new Object());
    }

    //1. INPUTS

    //2. PROCESS
    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCallBack") || parameterInputs.Parameters.getValue("parameterProcessRequestCallBack") == undefined) {
        parameterInputs.Parameters.setValue("parameterProcessRequestCallBack", new Object());
    }

    parameterInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
    parameterInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);

    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails_Parameters") || parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters") == undefined) {
        parameterInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails_Parameters", null);
    }

    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails_CallBack") || parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_CallBack") == undefined) {
        parameterInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails_CallBack", null);
    }

    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCallBack") || parameterInputs.Parameters.getValue("parameterProcessRequestCallBack") == undefined) {
        parameterInputs.Parameters.setValue("parameterProcessRequestCallBack", null);
    }

    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedDisturber") || parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber") == undefined) {
        parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedDisturber", null);
    }    

    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedSensor") || parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor") == undefined) {
        parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedSensor", null);
    }
    
    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedStorer") || parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer") == undefined) {
        parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", new Implement_DesignPattern_Factory_Storer_12_2_1_0.BaseDI.Professional.Story.Programming_0.Implement_DesignPattern_Builder_Chapter_12_2_1_0(parameterInputs));
    }

    parameterInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", null);

    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails") || parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails") == undefined) {
        
        storedProcessRequestDataRepository = new ChapterPage_Page_2_1_Begin_Process_12_2_1_0.BaseDI.Professional.Chapter.Page.Programming_2.Page_2_1_Begin_Process_12_2_1_0(parameterInputs);
        storedProcessRequestDataRepository.Repository = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0.BaseDI.Professional.State.Programming_2.LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0(parameterInputs);        
        
        storedOutputResponseDataRepository = await Promise.resolve(storedProcessRequestDataRepository.Action());

        parameterInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedOutputResponseDataRepository.StorylineDetails);
    }    

    //3. OUTPUTS
    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseControlID") || parameterInputs.Parameters.getValue("parameterOutputResponseControlID") == undefined) {
        parameterInputs.Parameters.setValue("parameterOutputResponseControlID", null);
    }

    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseType") || parameterInputs.Parameters.getValue("parameterOutputResponseType") == undefined) {
        parameterInputs.Parameters.setValue("parameterOutputResponseType", "HTML");
    }    

    //#endregion

    //#endregion

    //#region MEMORIZE output variables

    //#region MEMORIZE output xxx xxxx

    //#endregion

    //#endregion

    //#endregion

    //#region 2. PROCESS

    //#region HANDLE application defaults

    //#region IDEAL CASE - USE baseDI converter

    storedOutputResponseData = await Action_Factory_Start(parameterInputs);

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

//#endregion

//#endregion

//#region 2. EXECUTE store dynamic test variable process

//#region IDEA CASE - USE baseDI variables

const Action_Factory_Start = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0> => {
    if (parameterInputs.Parameters.size() > 0) {
        if (parameterInputs.Parameters.getValue("parameterInputRequestName").toLocaleUpperCase().includes("DIRECTOR_OF_WEBDEVELOPMENT") ||
            parameterInputs.Parameters.getValue("parameterInputRequestName").toLocaleUpperCase().includes("EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE")) {

            return Action_Factory_Start_12_3_WebDevelopment(parameterInputs);
        }
    }

    return Action_Factory_End(parameterInputs);
}

//#region 12-3 - Web Development

const Action_Factory_Start_12_3_WebDevelopment = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0> => {
    //#region 1. INPUTS

    //#region DEFINE control variables

    //#endregion

    //#region DEFINE input variables


    //#endregion

    //#region DEFINE process variables


    //#endregion

    //#region DEFINE output variables

    let storedOutputResponseData: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

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


    //0. CONTROLLERS

    //1. INPUTS
    parameterInputs.Parameters.setValue("parameterInputRequestActionName", Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_HTTP_Request_1_0);
    parameterInputs.Parameters.setValue("parameterInputRequestName", parameterInputs.Parameters.getValue("parameterInputRequestName"));
    parameterInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey"));

    //2. PROCESS
    parameterInputs.Parameters.setValue("parameterProcessRequestExtraData", parameterInputs.Parameters.getValue("parameterProcessRequestExtraData"));

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

    //#region IDEAL CASE - USE baseDI converter

    storedOutputResponseData = parameterInputs;

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

//#endregion


//#endregion

//#endregion

//#region 3. EXECUTE store test variable process
const Action_Factory_End = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0> => {
    //#region 1. INPUTS

    //#region DEFINE control variables

    //#endregion

    //#region DEFINE input variables

   
    //#endregion

    //#region DEFINE process variables

    let storedProcessRequestCentralizedStorer: Implement_DesignPattern_Factory_Storer_12_2_1_0.BaseDI.Professional.Story.Programming_0.Implement_DesignPattern_Factory_Storer_12_2_1_0 = null;
    let storedProcessRequestLocalCacheDataRepository: ChapterPage_Page_2_1_Begin_Process_12_2_1_0.BaseDI.Professional.Chapter.Page.Programming_2.Page_2_1_Begin_Process_12_2_1_0;

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

    //0. CONTROLLERS

    //1. INPUTS

    //2. PROCESS
    parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedDisturber", null);
    parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedSensor", null);
    parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);

    storedProcessRequestLocalCacheDataRepository = new ChapterPage_Page_2_1_Begin_Process_12_2_1_0.BaseDI.Professional.Chapter.Page.Programming_2.Page_2_1_Begin_Process_12_2_1_0(parameterInputs);
    storedProcessRequestLocalCacheDataRepository.Repository = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0.BaseDI.Professional.State.Programming_2.LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0(parameterInputs);

    //3. OUTPUT
    storedOutputResponseProcess = await Promise.all([storedProcessRequestLocalCacheDataRepository.Action()]);
    parameterInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedOutputResponseProcess[0].StorylineDetails);

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

    //#region IDEAL CASE - USE baseDI converter



    //#endregion

    //#endregion

    //#endregion

    //#region 3. OUTPUT

    //#region HANDLE execution response

    //#region IDEAL CASE - USE baseDI data

    return parameterInputs;

    //#endregion

    //#endregion    

    //#endregion
}
//#endregion

//#endregion
