using BaseDI.Director.Programming_5;
using BaseDI.Director.Risk_Management_3;
using BaseDI.Director.Risk_Management_4;
using BaseDI.Script.Programming.Abstract_1;
using BaseDI.Script.Programming.Extensions_1;
using BaseDI.Script.Programming.Poco_1;
using BaseDI.Script.Programming_1;

using BaseDI.State.Risk_Management_3;
using BaseDI.State.Risk_Management_4;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.Story.Risk_Management_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class RiskManagementFactoryTester_NicheMaster_11_1_1_0 : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _clientORserverInstance;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private ExtraData_12_2_1_0 _extraData = null;

        internal RiskManagementFactoryTester_NicheMaster_11_1_1_0(ExtraData_12_2_1_0 extraData)
        {
            //region 1. Assign
            _clientORserverInstance = new Dictionary<string, object>();

            _extraData = extraData;

            //region 2. Action

            //region 3. Observe
        }

        public override object Action(Dictionary<string, object> clientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, object requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestName = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            #region ASSIGN MASTER LEADER

            _clientORserverInstance = clientORserverInstance;

            _centralizedStorer = centralizedStorer;
            _centralizedDisturber = centralizedDisturber;
            _centralizedSensor = centralizedSensor;

            _extraData.KeyValuePairs.TryAdd("APILocationLocalNodeJS", APILocationLocalNodeJS);
            _extraData.KeyValuePairs.TryAdd("APILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _extraData.KeyValuePairs.TryAdd("APILocationRemote", APILocationRemote);

            AppSettings = (IConfiguration)_clientORserverInstance["appSettings"];

            #endregion

            #region ASSIGN REQUEST HANDLER

            var requestType = requestToResolve.GetType();

            switch (requestType)
            {
                case Type _ when requestType == typeof(Director_Of_RiskManagement_Chapter_11_1_Page_3_Storage_Handler_1_0):
                    var resolvedRequest3 = Create_Director_Of_RiskManagement_Chapter_11_1_Page_3_Storage_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    return resolvedRequest3;
                case Type _ when requestType == typeof(Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0):
                    var resolvedRequest4 = Create_Director_Of_RiskManagement_Chapter_11_1_Page_4_Disturb_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    return resolvedRequest4;
                default:
                    return default;
            }

            #endregion
        }

        #region Page 3

        private object Create_Director_Of_RiskManagement_Chapter_11_1_Page_3_Storage_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES            

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_11_1_RISKMANAGEMENT_NICHE_MASTER"); 

            if (repositoryType == null) repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_RiskManagement_Chapter_11_1_Page_3_Storage_Handler_1_0 director = new Director_Of_RiskManagement_Chapter_11_1_Page_3_Storage_Handler_1_0();
            
            director.ClientOrServerInstance = _clientORserverInstance;

            director.ExtraData = extraData;

            director.MasterStorer = _centralizedStorer;
            director.MasterDisturber = _centralizedDisturber;
            director.MasterSensor = _centralizedSensor;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCAL_FILE":
                    var localFile = new LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_3_Storage_Handler_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_3_Storage_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 4

        private object Create_Director_Of_RiskManagement_Chapter_11_1_Page_4_Disturb_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES            

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_11_1_RISKMANAGEMENT_NICHE_MASTER"); 

            if (repositoryType == null) repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0();

            director.ClientOrServerInstance = _clientORserverInstance;

            director.ExtraData = extraData;

            director.MasterStorer = _centralizedStorer;
            director.MasterDisturber = _centralizedDisturber;
            director.MasterSensor = _centralizedSensor;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCAL_FILE":
                    var localFile = new LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_4_Disturb_Handler_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_4_Disturb_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;

                    break;
                case "REMOTESERVICEVENDOR":
                    var remoteServiceVendor = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_4_Disturb_Handler_1_0(storylineDetails);

                    director.Repository = remoteServiceVendor;

                    break;
            }

            #endregion

            return director;
        }

        #endregion
    }

    #endregion
}
