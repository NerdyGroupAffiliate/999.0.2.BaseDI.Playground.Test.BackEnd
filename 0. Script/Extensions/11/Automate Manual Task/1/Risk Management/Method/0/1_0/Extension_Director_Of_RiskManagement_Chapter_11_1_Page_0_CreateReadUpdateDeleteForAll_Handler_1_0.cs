using BaseDI.Professional.Script.Programming.Poco_1;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseDI.Professional.Script.Risk_Management.Extensions_0
{
    public class Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0
    {
        //SETTINGS
        private static IConfiguration _storedAppSettings = null;

        //CLIENT/SERVER
        private static Dictionary<string, object> _storedClientORserverInstance;

        //EXCEPTIONS
        private static Exception _storedExceptionDetails = null;

        //MISC
        private static ExtraData_12_2_1_0 _storedExtraData = null;

        public static Exception Step_X_X_Custom_Control_AppException_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. Inputs    

            #region MEMORIZE client/server instance

            _storedClientORserverInstance = parameterInputs.Parameters["StoredClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientORserverInstance["appSettings"];

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

        public static Exception Step_X_X_Custom_Output_DeveloperMessage_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. Inputs    

            #region MEMORIZE client/server instance

            _storedClientORserverInstance = parameterInputs.Parameters["StoredClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            string storedDeveloperConsoleLogTemplate = "";

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
    }
}
