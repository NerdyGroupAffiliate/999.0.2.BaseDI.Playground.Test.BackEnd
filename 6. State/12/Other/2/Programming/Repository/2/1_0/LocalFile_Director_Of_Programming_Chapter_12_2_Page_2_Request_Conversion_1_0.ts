//#region Imports

//#region BaseDI

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//1-1 - ADVERTISING
//import * as state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.Professional.QuickStart.Templates/2. Data Movement/ARM Templates/1/Generate Brand Awareness/1/Advertising/Template/2/1_0/state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0.json"
//import * as state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1 from "../../../../../../../../../999.0.3.BaseDI.Professional.QuickStart.Templates/2. Data Movement/ARM Templates/1/Generate Brand Awareness/1/Advertising/Template/2/1_0/state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0-P1_4_1_1.json"

//12-2 - PROGRAMMING
import * as state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/2/Programming/Template/5/1_0/State_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.json";
import * as state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/2/Programming/Template/5/1_0/State_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0-P1_0.json";

//12-3 - WEB DEVELOPMENT
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/1/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/1/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/2/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/2/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/3/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/3/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/4/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/4/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/5/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/5/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/6/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0-P1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/6/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/7/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0-P1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/7/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/8/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/8/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/9/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/9/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0-P1_0.json"

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/10/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/10/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/11/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/11/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0-P1_0.json";

import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/12/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0.json";
import * as state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/12/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0-P1_0.json";


import * as state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/13/1_0/State_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.json";
import * as state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/13/1_0/State_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0.json";


//12-5 - SECURITY
import * as state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/5/Security/Template/1/1_0/State_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0.json";
import * as state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0_P1_0 from "../../../../../../../../../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/5/Security/Template/1/1_0/State_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0-P1_0.json";


import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.State.Programming_2 {
    export class LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //DATASETS
        private _storedStorylineDetails: object;

        //PLUMBING
        private _storedBaseDIPlaceHolderValue = "{BASEDICUSTOMOPTION}";


        //#endregion

        //#region 2. Ready

        constructor(parameterStorylineDetails: object)
        {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterStorylineDetails;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - defaults handler

            this.HandleDefaults = this.HandleDefaults.bind(this);
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

        //#region EXECUTE LOGIC INSTUCTIONS

        public async Action_8_Process_CRUD(): Promise<any>
        {
            //#region 1. INPUTS

            //#region DEFINE process checkpoint

            let storedProcessCheckPointHit: boolean = false;

            //#endregion

            //#region DEFINE storyline details

            let storedStorylineDetails: Object = null;

            let storedStorylineDetailsFiltered: Object = null;
            let storedStorylineDetailsFilteredResult: Object = null;

            let storedStorylineDetails_Parameters:Object = null;

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this.ClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE action name

            let storedActionName: string = this.ClientOrServerInstance["storedActionName"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SUCCESSFULLY used cache");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this.ClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this.ClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this.ClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_8_Process_CRUD");

            //OPTIONAL
            storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, Setup, Storage, Uptime


            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region GET LOCAL DATASET

            if (storedRequestName != null && storedRequestName != undefined)
            {
                //#region IDEAL CASE - USE LOCAL DATASET

                //#region 1-1 - Advertising

                try
                {
                    switch (storedRequestName.toUpperCase()) {
                        //case "DIRECTOR_OF_ADVERTISING_CHAPTER_1_1_PAGE_2_CREATEWHEREAPERSONBECAMEAWAREOFTOPIC_HANDLER_1_0":
                        //    storedStorylineDetails = state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0;

                        //    switch (storedRequestNameParameters.toUpperCase())
                        //    {
                        //        case "DIRECTOR_OF_ADVERTISING_CHAPTER_1_1_PAGE_2_CREATEWHEREAPERSONBECAMEAWAREOFTOPIC_HANDLER_1_0-P1_4_1_1":
                        //            storedStorylineDetails_Parameters = state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1;
                        //            break;
                        //    }
                        //    storedProcessCheckPointHit = true;

                        //    break;
                    }

                    //#region EDGE CASE - USE developer logger

                    //if (storedProcessCheckPointHit == true) {
                    //    if (storedDeveloperMode) {
                        //this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                        //storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        //storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                        //Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    //    }
                    // storedProcessCheckPointHit = false;

                    //}
                     
                    //#endregion
               
                }
                catch (mistake) {
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode) {
                        this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED reading cached data");
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

                //#region 12-2 - Programming

                try
                {
                    switch (storedRequestName.toUpperCase()) {
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                            storedStorylineDetails = state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;
                    }

                    //#region EDGE CASE - USE developer logger

                    if (storedProcessCheckPointHit == true) {
                        if (storedDeveloperMode) {
                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        storedProcessCheckPointHit = false;

                    }

                    //#endregion
                }
                catch (mistake) {
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode) {
                        this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED reading cached data");
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

                //#region 12-3 - Web Development

                try
                {
                    switch (storedRequestName.toUpperCase()) {
                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_9_READMEMBERSHIPSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0":
                            storedStorylineDetails = state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;
                    }
    
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessCheckPointHit == true) {
                        if (storedDeveloperMode) {
                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        storedProcessCheckPointHit = false;
                    }

                    //#endregion
                }
                catch (mistake) {
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode) {
                        this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED reading cached data");
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

                //#region 12-5 - Security
                try
                {
                    switch (storedRequestName.toUpperCase()) {
                        case "DIRECTOR_OF_SECURITY_CHAPTER_12_5_PAGE_1_READAUTHENTICATIONFORALL_HANDLER_1_0":
                            storedStorylineDetails = state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0;

                            switch (storedRequestNameParameters.toUpperCase()) {
                                case "DIRECTOR_OF_SECURITY_CHAPTER_12_5_PAGE_1_READAUTHENTICATIONFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;
                    }

                    //#region EDGE CASE - USE developer logger

                    if (storedProcessCheckPointHit == true) {
                        if (storedDeveloperMode) {
                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        storedProcessCheckPointHit = false;
                    }

                    //#endregion
                }
                catch (mistake) {
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode) {
                        this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED reading cached data");
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
            }
            else
            {
                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED retrieving cache");
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                throw new Error("FAILED retrieving cache");

                //#endregion
            }


            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            storedStorylineDetailsFiltered = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedStorylineDetails, "", this._storedBaseDIPlaceHolderValue, true);

            storedStorylineDetailsFilteredResult = {
                StorylineDetails: storedStorylineDetails,
                StorylineDetailsFiltered: storedStorylineDetailsFiltered,
                StorylineDetails_Parameters: storedStorylineDetails_Parameters
            };

            return storedStorylineDetailsFilteredResult;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public async Action_1_Begin_Process(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_2_Validate_Process(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_3_Process_StoryAuthor(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_4_Process_StoryCharacters(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_5_Process_StorySetting(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_6_Process_StoryExperiences(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_7_Process_StoryResources(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_9_Verify_Process(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_10_End_Process(): Promise<any> {
            return this._storedStorylineDetails;
        }

        //#endregion

        //#endregion
    }
}