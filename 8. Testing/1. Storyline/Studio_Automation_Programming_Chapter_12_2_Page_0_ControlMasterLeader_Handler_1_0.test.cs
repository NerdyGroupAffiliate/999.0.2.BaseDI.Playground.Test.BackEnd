#region Imports

#region BaseDI

using TestVariables = BaseDI.Professional.Testing.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlTestingVariables_Handler_1_0;

//0. SCRIPT
using BaseDI.Professional.Script.Programming.Poco_1;

//1. STORYLINE
using BaseDI.Professional.Story.Programming_0;

//5. CHAPTER
using ChapterPage = BaseDI.Professional.Chapter.Page.Programming_2;

//6. STATE
using BaseDI.Professional.State.Programming_2;

//7. DIRECTOR
using BaseDI.Professional.Director.Programming_1;

#endregion

#region .Net Core

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

#endregion

#region 3rd Party Core

using Xunit;
using Newtonsoft.Json.Linq;


#endregion

#endregion

namespace BaseDI.Professional.Testing
{
    public class Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0_Test
    {
        #region 1. Assign

        //CLIENT/SERVER

        //SETTINGS

        //DATASETS


        //MISC

        //PLUMBING


        #endregion

        #region 2. Ready

        public Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0_Test()
        {

        }

        #endregion

        #region 3. Set

        #endregion

        #region 4. Action

        public static Func<SingleParmPoco_12_2_1_0, dynamic> ExecuteTransportRequest = (SingleParmPoco_12_2_1_0 parameterInputs) =>
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            ChapterPage.Page_2_1_Begin_Process_12_2_1_0 storedProcessRequestDataRepository;

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;
            dynamic storedOutputResponseDataRepository = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request settings


            #endregion


            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE application defaults

            #region IDEAL CASE - USE baseDI transporter

            try
            {
                Func<SingleParmPoco_12_2_1_0, JObject> Action = (SingleParmPoco_12_2_1_0 parameterInputs) =>
                {
                     storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(parameterInputs))
                        .SetupStoryline(parameterInputs)
                        .Action().Result;

                    return storedOutputResponseData;
                };

                Action(parameterInputs);
            }
            catch (Exception storedProcessRequestMistake)
            {
                Console.WriteLine(storedProcessRequestMistake);
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE baseDI data

            return storedOutputResponseData;

            #endregion

            #endregion    

            #endregion
        };

        [Fact]
        public static async Task<bool> _12_3_Web_Development_Transport_Test_Transport_Request_To_Web_Development_Handler_1_0()
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            ChapterPage.Page_2_1_Begin_Process_12_2_1_0 storedProcessRequestDataRepository;

            #endregion

            #region DEFINE output variables

            string storedOutputResponse = null;
            dynamic storedOutputResponseData = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process test variables

            SingleParmPoco_12_2_1_0 storedInputs = new SingleParmPoco_12_2_1_0();

            //0. CONTROLLERS

            //1. INPUTS
            storedInputs.Parameters["parameterInputRequestActionName"] = Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_HTTP_Request_1_0;
            storedInputs.Parameters["parameterInputRequestName"] = "Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0";
            storedInputs.Parameters["parameterInputRequestNameDataCacheKey"] = "Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0-P1_0";

            storedInputs = TestVariables.Action(storedInputs).Result;

            //2. PROCESS

            //3. OUTPUTS

            #endregion


            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - USE baseDI extension

            try
            {
                storedOutputResponseData = ExecuteTransportRequest(storedInputs);
            }
            catch (Exception storedProcessRequestMistake)
            {
                Console.WriteLine(storedProcessRequestMistake);
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE baseDI data

            try
            {
                if (storedOutputResponseData)
                {
                    if (storedInputs.Parameters["parameterProcessRequestTracker"] != null)
                    {
                        storedOutputResponse = storedInputs.Parameters["parameterInputRequestName"];

                        if((storedInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestHandlerName"].ToUpper() == storedOutputResponse.ToUpper()))
                        {
                            Console.WriteLine("SUCCESSFULLY found request handler " + storedInputs.Parameters["parameterInputRequestName"]);

                            return true;
                        }
                    }
                }
            }
            catch (Exception storedProcessRequestMistake)
            {
                Console.WriteLine(storedProcessRequestMistake);
            }

            return false;

            #endregion

            #endregion    

            #endregion
        }
        #endregion
    }
}
