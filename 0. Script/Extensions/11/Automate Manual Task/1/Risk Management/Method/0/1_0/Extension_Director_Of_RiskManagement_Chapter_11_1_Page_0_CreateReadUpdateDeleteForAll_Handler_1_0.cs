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
        private static IConfiguration _storedAppSettings = null;

        //CLIENT/SERVER
        private static Dictionary<string, object> _storedClientOrServerInstance;

        //EXCEPTIONS
        private static Exception _storedExceptionDetails = null;

        //MISC
        private static ExtraData_12_2_1_0 _storedExtraData = null;

        //PLUMBING
        private static string _storedDeveloperExceptionConsoleLogTemplate = "***LEAKY PIPE*** {stored3WordDescription}\n  {storedActionName} -> {storedFileName} -> {storedMethodName}\n";

        private static string _storedDeveloperStepConsoleLogTemplate = "STEP {storedStepNumberReplace}: {stored3WordDescription}\n  {storedActionName} -> {storedFileName} -> {storedMethodName}\n";
        private static string _storedDeveloperStepConsoleLogTemplate_Idented = "  STEP {storedStepNumberReplace}: {stored3WordDescription}\n     {storedActionName} -> {storedFileName} -> {storedMethodName}\n";
        private static string _storedDeveloperStepConsoleLogTemplate_Idented_Twice = "     STEP {storedStepNumberReplace}: {stored3WordDescription}\n        {storedActionName} -> {storedFileName} -> {storedMethodName}\n";

        #region DEVELOPER MANAGEMENT

        public static async Task<Exception> Step_X_X_Framework_Control_DeveloperException_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. Inputs    

            #region MEMORIZE client/server instance

            _storedClientOrServerInstance = parameterInputs.Parameters["StoredClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["appSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE exception details

            _storedExceptionDetails = parameterInputs.Parameters["StoredMistakes"];

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = parameterInputs.Parameters["StoredExtraData"];

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

                bool storedProcessCheckPointHit = false;

                #endregion

                #region DEFINE stored message

                string storedMessage = "";

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count() > 0)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameter3WordDescription"))
                    {
                        storedMessage += "***parameter3WordDescription*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterActionName"))
                    {
                        storedMessage += "***parameterActionName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterClientOrServerInstance"))
                    {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["appSettings"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFileName"))
                    {
                        storedMessage += "***parameterFileName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMessageType"))
                    {
                        storedMessage += "***parameterMessageType*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMethodName"))
                    {
                        storedMessage += "***parameterMethodName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStepNumberReplace"))
                    {
                        storedMessage += "***parameterStepNumberReplace*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit)
                    {
                        #region EDGE CASE - USE exception handler

                        Console.WriteLine("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedMessage);

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

            string storedMessage = "";

            #endregion

            #region MEMORIZE client / server instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["parameterAppSettings"];

            #endregion

            #region MEMORIZE developer mode

            string stored3WordDescription = parameterInputs.Parameters["parameter3WordDescription"];
            string storedActionName = parameterInputs.Parameters["parameterActionName"];
            IConfiguration storedAppSettings = parameterInputs.Parameters["parameterAppSettings"];
            Dictionary<string, object> storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];
            string storedFileName = parameterInputs.Parameters["parameterFileName"];
            string storedMethodName = parameterInputs.Parameters["parameterMethodName"];
            int storedStepNumberReplace = parameterInputs.Parameters["parameterStepNumberReplace"];

            string storedMessageType = (parameterInputs.Parameters["parameterMessageType"] != null ? parameterInputs.Parameters["parameterMessageType"] : "LOGGING");

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

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedMasterStorer = parameterInputs.Parameters["parameterMasterStorer"];

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE application logging

                #region IDEAL CASE - USE developer logger

                Func<Task<bool>> ExecuteOutputRequest = async () =>
                {
                    #region 1A. SETUP logging output

                    if (storedMessageType.ToUpper() == "LOGGING")
                    {
                        if (storedOPTIONALBeginOfProcess || storedOPTIONALEndOfProcess)
                        {
                            storedMessage = _storedDeveloperStepConsoleLogTemplate; // "STEP {storedStepNumberReplace}: {stored3WordDescription}\n  {storedActionName} -> {storedFileName} -> {storedMethodName}\n";
                        }
                        else
                        {
                            if (!string.IsNullOrEmpty(storedOPTIONALAccountingCostType))
                            {
                                storedMessage = _storedDeveloperStepConsoleLogTemplate_Idented_Twice; // "   STEP {storedStepNumberReplace}: {stored3WordDescription}\n      {storedActionName} -> {storedFileName} -> {storedMethodName}\n";      
                            }
                            else
                            {
                                storedMessage = _storedDeveloperStepConsoleLogTemplate_Idented; // "   STEP {storedStepNumberReplace}: {stored3WordDescription}\n      {storedActionName} -> {storedFileName} -> {storedMethodName}\n";      
                            }
                        }
                    }

                    #endregion

                    #region 1B. SETUP exception output

                    if (storedMessageType.ToUpper() == "MISTAKE")
                    {
                        storedMessage = _storedDeveloperExceptionConsoleLogTemplate; // ***LEAKY PIPE*** {stored3WordDescription}\n  {storedActionName} -> {storedFileName} -> {storedMethodName}\n\n";

                        storedMistake = true;
                    }

                    #endregion

                    #region 2. SETUP default message

                    storedMessage = storedMessage.Replace("{storedStepNumberReplace}", storedStepNumberReplace.ToString());
                    storedMessage = storedMessage.Replace("{stored3WordDescription}", (storedOPTIONALAccountingCostType != "") ? "[" + storedOPTIONALAccountingCostType.ToUpper() + " COST] - " + stored3WordDescription : "[ZERO COST] - " + stored3WordDescription);
                    storedMessage = storedMessage.Replace("{storedActionName}", storedActionName);
                    storedMessage = storedMessage.Replace("{storedFileName}", storedFileName);
                    storedMessage = storedMessage.Replace("{storedMethodName}", storedMethodName);

                    #endregion

                    if (!_storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE_SILENT"))
                    {
                        #region 3A. OUPUT client message

                        if (_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_DEVELOPER_MODE").ToUpper() == "CLIENT")
                        {
                            if (storedMistake)
                            {
                                Console.WriteLine("%c" + storedMessage, "color:" + "Orange");

                                return true;
                            }

                            if (storedOPTIONALBeginOfProcess == true)
                            {
                                Console.WriteLine("\n\n------------------------------------------------------------------------------------------------------------------------------");
                                Console.WriteLine("NEW REQUEST - " + storedActionName.ToUpper());
                                Console.WriteLine("------------------------------------------------------------------------------------------------------------------------------\n");

                                Console.WriteLine("%c" + storedMessage, "color:" + "#94f500");

                                return true;
                            }

                            if (storedOPTIONALMiddleOfProcess == true)
                            {
                                Console.WriteLine("%c" + storedMessage, "color:" + "#00c6f5");

                                return true;
                            }

                            if (storedOPTIONALAccountingCostType != "")
                            {
                                Console.WriteLine("%c" + storedMessage, "color:" + "Yellow");

                                return true;
                            }

                            if (storedOPTIONALEndOfProcess == true)
                            {
                                Console.WriteLine("%c" + storedMessage, "color:" + "#ff0e11");

                                return true;
                            }
                            else
                            {
                                Console.WriteLine("%c" + storedMessage, "color:" + "#D3D3D3");

                                return true;
                            }
                        }
                        #endregion

                        #region 3B. OUPUT server message

                        if (_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_DEVELOPER_MODE").ToUpper() == "SERVER")
                        {
                            if (storedMistake)
                            {
                                //Console.WriteLine("%c" + storedMessage, "color:" + "Orange");
                                Console.WriteLine(storedMessage);

                                return true;
                            }

                            if (storedOPTIONALBeginOfProcess == true)
                            {
                                Console.WriteLine("\n\n------------------------------------------------------------------------------------------------------------------------------");
                                Console.WriteLine("NEW REQUEST - " + storedActionName.ToUpper());
                                Console.WriteLine("------------------------------------------------------------------------------------------------------------------------------\n");

                                Console.WriteLine(storedMessage);
                                //Console.WriteLine('\x1b[32m', storedMessage, '\x1b[0m'); //GREEN

                                return true;
                            }

                            if (storedOPTIONALMiddleOfProcess == true)
                            {
                                Console.WriteLine(storedMessage);
                                //Console.WriteLine('\x1b[34m', storedMessage); //BLUE

                                return true;
                            }

                            if (storedOPTIONALAccountingCostType != "")
                            {
                                Console.WriteLine(storedMessage);
                                //Console.WriteLine("%c" + storedMessage, "color:" + "Yellow"); //YELLOW

                                return true;
                            }

                            if (storedOPTIONALEndOfProcess == true)
                            {
                                Console.WriteLine(storedMessage);
                                //Console.WriteLine("%c" + storedMessage, "color:" + "#ff0e11"); //RED

                                return true;
                            }
                            else
                            {
                                Console.WriteLine(storedMessage);
                                //Console.WriteLine('\x1b[37m', storedMessage);  //WHITE

                                return true;
                            }
                        }

                        #endregion
                    }

                    return await Task.FromResult<bool>(true).ConfigureAwait(true);
                };

                await ExecuteOutputRequest();

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
