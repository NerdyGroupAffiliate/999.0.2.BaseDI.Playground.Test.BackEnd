﻿using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming_1;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Professional.Story.Careers_Employment_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0 : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _clientORserverInstance;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private ExtraData_12_2_1_0 _extraData = null;

        internal CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0(ExtraData_12_2_1_0 extraData)
        {
            //region 1. Assign
            _clientORserverInstance = new Dictionary<string, object>();

            _extraData = extraData;

            //region 2. Action

            //region 3. Observe
        }

        public override object Action(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region ASSIGN MASTER LEADER

            _centralizedStorer = centralizedStorer;
            _centralizedDisturber = centralizedDisturber;
            _centralizedSensor = centralizedSensor;
            _clientORserverInstance = clientORserverInstance;

            _extraData.KeyValuePairs.TryAdd("APILocationLocalNodeJS", APILocationLocalNodeJS);
            _extraData.KeyValuePairs.TryAdd("APILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _extraData.KeyValuePairs.TryAdd("APILocationRemote", APILocationRemote);

            _extraData.KeyValuePairs.TryAdd("RequestToProcess", requestToProcess);
            _extraData.KeyValuePairs.TryAdd("RequestToProcessParameters", requestToProcessParameters);

            AppSettings = (IConfiguration)_clientORserverInstance["storedAppSettings"];

            #endregion

            #region ASSIGN REQUEST HANDLER

            var requestType = requestToResolve.GetType();

            //switch (requestType)
            //{
            //    case Type _ when requestType == typeof(Direct_Programming_Chapter_12_2_Page_1_ReadAndHandleRequest_1_0):
            //        var resolvedRequest = (StoryRequest)await Create_Director_Of_Programming_Chapter_12_2_Page_1_ReadApiRoute_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

            //        return resolvedRequest;
            //    default:
            //        return default(StoryRequest);

            //}

            return null;

            #endregion
        }

        #region Page 1

        private object Create_Director_Of_RiskManagement_Chapter_11_1_Page_1_ReadAndHandleMistakes_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES            

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_1_CAREERSEMPLOYMENT_NICHE_MASTER"); 

            if (repositoryType == null) repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            //director.Client = _client;

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

            return null;            
        }

        #endregion
    }

    #endregion
}
