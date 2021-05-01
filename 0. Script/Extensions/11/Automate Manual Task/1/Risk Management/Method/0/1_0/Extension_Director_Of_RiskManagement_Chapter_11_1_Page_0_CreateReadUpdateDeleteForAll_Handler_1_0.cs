#region Imports

#region 3rd Party

using Newtonsoft.Json.Linq;

#endregion

#region BaseDI

using BaseDI.Professional.Script.Programming.Poco_1;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseDI.Professional.Script.Programming.Abstract_1;

#endregion

#endregion

namespace BaseDI.Professional.Script.Risk_Management.Extensions_0
{
    public class Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0
    {
        //SETTINGS
        private static IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private static Dictionary<string, object> _storedProcessRequestTracker;

        //EXCEPTIONS
        private static Exception _storedProcessRequestMistake = null;

        //MISC
        private static ExtraData_12_2_1_0 _storedProcessRequestExtraData = null;

        //PLUMBING
        private static string _storedOutputResponseMistakeTemplate = "***LEAKY PIPE*** {storedProcessRequest3WordDescription}\n  {storedInputRequestActionName} -> {storedProcessRequestFileName} -> {storedProcessRequestMethodName}\n";

        private static string _storedOutputResponseStepTemplate = "STEP {storedStepNumberReplace}: {storedProcessRequest3WordDescription}\n  {storedInputRequestActionName} -> {storedProcessRequestFileName} -> {storedProcessRequestMethodName}\n";
        private static string _storedOutputResponseStepTemplate_Idented = "  STEP {storedStepNumberReplace}: {storedProcessRequest3WordDescription}\n     {storedInputRequestActionName} -> {storedProcessRequestFileName} -> {storedProcessRequestMethodName}\n";
        private static string _storedOutputResponseStepTemplate_Idented_Twice = "     STEP {storedStepNumberReplace}: {storedProcessRequest3WordDescription}\n        {storedInputRequestActionName} -> {storedProcessRequestFileName} -> {storedProcessRequestMethodName}\n";

        #region DEVELOPER MANAGEMENT

        public static async Task<Exception> Step_X_X_Framework_Control_DeveloperException_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. Inputs    

            #region MEMORIZE client/server instance

            _storedProcessRequestTracker = parameterInputs.Parameters["storedProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");
            
            #endregion

            #region MEMORIZE exception details

            _storedProcessRequestMistake = parameterInputs.Parameters["storedProcessRequestMistakes"];
            
            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["storedProcessRequestExtraData"];

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region HANDLE application mistake

                #region EDGE CASE - USE developer logger


                #endregion

                #region IDEAL CASE - USE an experience OR a director request handler


                #endregion

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE exception handler



                #endregion
            }

            #endregion
            
            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE an experience OR a director handler

            return null;

            #endregion

            #endregion

            #endregion
        }

        public static async Task<bool> Step_X_X_Framework_Output_DeveloperMessage_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE process checkpoint

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE stored message

                string storedOutputResponseMessage = "";

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count() > 0)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequest3WordDescription"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequest3WordDescription*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestFileName"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestFileName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseMessageType"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseMessageType*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMethodName"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMethodName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestStepNumberReplace"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestStepNumberReplace*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE exception handler

                        Console.WriteLine("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedOutputResponseMessage);

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return await Task.FromResult<bool>(false).ConfigureAwait(true);

                    #endregion                    
                }

                #endregion

                #endregion

                #endregion

                #region 3. OUTPUT

                #region RETURN validation passed

                #region IDEAL CASE - USE passed indicator

                return true;

                #endregion

                #endregion

                #endregion

            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE developer mode

            string storedOPTIONALAccountingCostType = "";

            bool storedOPTIONALBeginOfProcess = false;
            bool storedOPTIONALMiddleOfProcess = false;
            bool storedOPTIONALEndOfProcess = false;
            bool storedOPTIONALMasterLeaderIsSecondStep = false;

            bool storedMistake = false;

            #endregion

            #region DEFINE stored message

            string storedOutputResponseMessage = "";

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["parameterProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            string stored3WordDescription = parameterInputs.Parameters["parameterProcessRequest3WordDescription"];
            string storedActionName = parameterInputs.Parameters["parameterInputRequestActionName"];
            IConfiguration storedProcessRequestSettings = parameterInputs.Parameters["parameterProcessRequestSettings"];
            Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];
            string storedFileName = parameterInputs.Parameters["parameterProcessRequestFileName"];
            string storedMethodName = parameterInputs.Parameters["parameterProcessRequestMethodName"];
            int storedStepNumberReplace = parameterInputs.Parameters["parameterProcessRequestStepNumberReplace"];

            string storedOutputResponseMessageType = (parameterInputs.Parameters["parameterOutputResponseMessageType"] != null ? parameterInputs.Parameters["parameterOutputResponseMessageType"] : "LOGGING");

            if (parameterInputs.Parameters["parameterOPTIONALAccountingCostType"] != null)
                storedOPTIONALAccountingCostType = parameterInputs.Parameters["parameterOPTIONALAccountingCostType"];

            if (parameterInputs.Parameters["parameterOPTIONALBeginOfProcess"] != null)
                storedOPTIONALBeginOfProcess = parameterInputs.Parameters["parameterOPTIONALBeginOfProcess"];

            if (parameterInputs.Parameters["parameterOPTIONALMiddleOfProcess"] != null)
                storedOPTIONALMiddleOfProcess = parameterInputs.Parameters["parameterOPTIONALMiddleOfProcess"];

            if (parameterInputs.Parameters["parameterOPTIONALEndOfProcess"] != null)
                storedOPTIONALEndOfProcess = parameterInputs.Parameters["parameterOPTIONALEndOfProcess"];

            if (parameterInputs.Parameters["parameterOPTIONALMasterLeaderIsSecondStep"] != null)
                storedOPTIONALMasterLeaderIsSecondStep = parameterInputs.Parameters["parameterOPTIONALMasterLeaderIsSecondStep"];

            #endregion

            #region MEMORIZE master storer

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedMasterStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE application logging

                #region IDEAL CASE - USE developer logger

                Func<Task<bool>> ExecuteOutputResponse = async () =>
                {
                    #region 1A. SETUP logging output

                    if (storedOutputResponseMessageType.ToUpper() == "LOGGING")
                    {
                        if (storedOPTIONALBeginOfProcess || storedOPTIONALEndOfProcess)
                        {
                            storedOutputResponseMessage = _storedOutputResponseStepTemplate; // "STEP {storedStepNumberReplace}: {storedProcessRequest3WordDescription}\n  {storedInputRequestActionName} -> {storedProcessRequestFileName} -> {storedProcessRequestMethodName}\n";
                        }
                        else
                        {
                            if (!string.IsNullOrEmpty(storedOPTIONALAccountingCostType))
                            {
                                storedOutputResponseMessage = _storedOutputResponseStepTemplate_Idented_Twice; // "   STEP {storedStepNumberReplace}: {storedProcessRequest3WordDescription}\n      {storedInputRequestActionName} -> {storedProcessRequestFileName} -> {storedProcessRequestMethodName}\n";      
                            }
                            else
                            {
                                storedOutputResponseMessage = _storedOutputResponseStepTemplate_Idented; // "   STEP {storedStepNumberReplace}: {storedProcessRequest3WordDescription}\n      {storedInputRequestActionName} -> {storedProcessRequestFileName} -> {storedProcessRequestMethodName}\n";      
                            }
                        }
                    }

                    #endregion

                    #region 1B. SETUP exception output

                    if (storedOutputResponseMessageType.ToUpper() == "MISTAKE")
                    {
                        storedOutputResponseMessage = _storedOutputResponseMistakeTemplate; // ***LEAKY PIPE*** {storedProcessRequest3WordDescription}\n  {storedInputRequestActionName} -> {storedProcessRequestFileName} -> {storedProcessRequestMethodName}\n\n";

                        storedMistake = true;
                    }

                    #endregion

                    #region 2. SETUP default message

                    storedOutputResponseMessage = storedOutputResponseMessage.Replace("{storedStepNumberReplace}", storedStepNumberReplace.ToString());
                    storedOutputResponseMessage = storedOutputResponseMessage.Replace("{storedProcessRequest3WordDescription}", (storedOPTIONALAccountingCostType != "") ? "[" + storedOPTIONALAccountingCostType.ToUpper() + " COST] - " + stored3WordDescription : "[ZERO COST] - " + stored3WordDescription);
                    storedOutputResponseMessage = storedOutputResponseMessage.Replace("{storedInputRequestActionName}", storedActionName);
                    storedOutputResponseMessage = storedOutputResponseMessage.Replace("{storedProcessRequestFileName}", storedFileName);
                    storedOutputResponseMessage = storedOutputResponseMessage.Replace("{storedProcessRequestMethodName}", storedMethodName);

                    #endregion

                    if (!_storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE_SILENT"))
                    {
                        #region 3A. OUPUT client message

                        if (_storedProcessRequestSettings.GetValue<string>("AppSettings:APP_SETTING_DEVELOPER_MODE").ToUpper() == "CLIENT")
                        {
                            if (storedMistake)
                            {
                                Console.WriteLine("%c" + storedOutputResponseMessage, "color:" + "Orange");

                                return true;
                            }

                            if (storedOPTIONALBeginOfProcess == true)
                            {
                                Console.WriteLine("\n\n------------------------------------------------------------------------------------------------------------------------------");
                                Console.WriteLine("NEW REQUEST - " + storedActionName.ToUpper());
                                Console.WriteLine("------------------------------------------------------------------------------------------------------------------------------\n");

                                Console.WriteLine("%c" + storedOutputResponseMessage, "color:" + "#94f500");

                                return true;
                            }

                            if (storedOPTIONALMiddleOfProcess == true)
                            {
                                Console.WriteLine("%c" + storedOutputResponseMessage, "color:" + "#00c6f5");

                                return true;
                            }

                            if (storedOPTIONALAccountingCostType != "")
                            {
                                Console.WriteLine("%c" + storedOutputResponseMessage, "color:" + "Yellow");

                                return true;
                            }

                            if (storedOPTIONALEndOfProcess == true)
                            {
                                Console.WriteLine("%c" + storedOutputResponseMessage, "color:" + "#ff0e11");

                                return true;
                            }
                            else
                            {
                                Console.WriteLine("%c" + storedOutputResponseMessage, "color:" + "#D3D3D3");

                                return true;
                            }
                        }
                        #endregion

                        #region 3B. OUPUT server message

                        if (_storedProcessRequestSettings.GetValue<string>("AppSettings:APP_SETTING_DEVELOPER_MODE").ToUpper() == "SERVER")
                        {
                            if (storedMistake)
                            {
                                //Console.WriteLine("%c" + storedOutputResponseMessage, "color:" + "Orange");
                                Console.WriteLine(storedOutputResponseMessage);

                                return true;
                            }

                            if (storedOPTIONALBeginOfProcess == true)
                            {
                                Console.WriteLine("\n\n------------------------------------------------------------------------------------------------------------------------------");
                                Console.WriteLine("NEW REQUEST - " + storedActionName.ToUpper());
                                Console.WriteLine("------------------------------------------------------------------------------------------------------------------------------\n");

                                Console.WriteLine(storedOutputResponseMessage);
                                //Console.WriteLine('\x1b[32m', storedOutputResponseMessage, '\x1b[0m'); //GREEN

                                return true;
                            }

                            if (storedOPTIONALMiddleOfProcess == true)
                            {
                                Console.WriteLine(storedOutputResponseMessage);
                                //Console.WriteLine('\x1b[34m', storedOutputResponseMessage); //BLUE

                                return true;
                            }

                            if (storedOPTIONALAccountingCostType != "")
                            {
                                Console.WriteLine(storedOutputResponseMessage);
                                //Console.WriteLine("%c" + storedOutputResponseMessage, "color:" + "Yellow"); //YELLOW

                                return true;
                            }

                            if (storedOPTIONALEndOfProcess == true)
                            {
                                Console.WriteLine(storedOutputResponseMessage);
                                //Console.WriteLine("%c" + storedOutputResponseMessage, "color:" + "#ff0e11"); //RED

                                return true;
                            }
                            else
                            {
                                Console.WriteLine(storedOutputResponseMessage);
                                //Console.WriteLine('\x1b[37m', storedOutputResponseMessage);  //WHITE

                                return true;
                            }
                        }

                        #endregion
                    }

                    return await Task.FromResult<bool>(true).ConfigureAwait(true);
                };

                await ExecuteOutputResponse();

                #endregion    

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE return false

                return false;

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE true return

            return true;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }
}
