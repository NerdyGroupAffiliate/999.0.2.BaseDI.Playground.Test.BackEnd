
using BaseDI.Script.Programming.Abstract_1;
using BaseDI.Script.Programming.Extensions_1;
using BaseDI.Script.Programming.Poco_1;
using BaseDI.Script.Programming_1;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Story.Supplements_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class SupplementsFactoryImplementer_NicheMaster_4_1_1_0 : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _clientORserverInstance;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private ExtraData_12_2_1_0 _extraData = null;

        internal SupplementsFactoryImplementer_NicheMaster_4_1_1_0(ExtraData_12_2_1_0 extraData)
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

            _extraData.KeyValuePairs = new Dictionary<string, object>();

            _extraData.KeyValuePairs.TryAdd("APILocationLocalNodeJS", APILocationLocalNodeJS);
            _extraData.KeyValuePairs.TryAdd("APILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _extraData.KeyValuePairs.TryAdd("APILocationRemote", APILocationRemote);

            _extraData.KeyValuePairs.TryAdd("RequestToProcess", requestToProcess);
            _extraData.KeyValuePairs.TryAdd("RequestToProcessParameters", requestToProcessParameters);

            AppSettings = (IConfiguration)_clientORserverInstance["appSettings"];

            #endregion

            #region ASSIGN REQUEST HANDLER

            var requestType = requestToResolve.GetType();

            //switch (requestType)
            //{
            //    case Type _ when requestType == typeof(Direct_Programming_Chapter_12_2_Page_1_ReadAndHandleRequest_1_0):
            //        var resolvedRequest = (StoryRequest)Create_Director_Of_Programming_Chapter_12_2_Page_1_ReadApiRoute_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

            //        return resolvedRequest;
            //    default:
            //        return default(StoryRequest);

            //}

            return null;

            #endregion
        }

        #region Page 1

        private object Create_Director_Of_Programming_Chapter_12_2_Page_1_ReadApiRoute_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE"); 

            if (repositoryType == null) repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            //Direct_Programming_Chapter_12_2_Page_1_ReadAndHandleRequest_1_0 director = new Direct_Programming_Chapter_12_2_Page_1_ReadAndHandleRequest_1_0();

            //director.ClientOrServerInstance = _clientORserverInstance;

            //director.ExtraData = extraData;

            //director.MasterStorer = _centralizedStorer;
            //director.MasterDisturber = _centralizedDisturber;
            //director.MasterSensor = _centralizedSensor;

            //director.StorylineDetails = storylineDetails;
            //director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            //switch (repositoryType.ToUpper())
            //{
            //    case "LOCAL_FILE":
            //        var localFile = new LocalFile_Direct_Programming_Chapter_12_2_Page_1_ReadApiRoute_1_0(storylineDetails);

            //        director.Repository = localFile;

            //        break;
            //    case "REMOTE_SERVICE":
            //        var remoteService = new RemoteService_Direct_Programming_Chapter_12_2_Page_1_ReadApiRoute_1_0(storylineDetails);

            //        director.Repository = remoteService;

            //        break;
            //}

            #endregion

            return default(Object);
        }

        #endregion
    }

    #endregion
}
