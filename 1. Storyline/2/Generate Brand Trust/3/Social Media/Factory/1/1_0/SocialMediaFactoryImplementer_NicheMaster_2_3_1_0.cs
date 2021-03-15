using BaseDI.BackEnd.Experience.Movement.Social_Media_1;
using BaseDI.BackEnd.Experience.Movement.Social_Media_2;
using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming_1;
using BaseDI.BackEnd.State.Social_Media_;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Story.Social_Media_3
{
    #region 6. Action Implementation

    internal class SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _clientORserverInstance;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private ExtraData_12_2_1_0 _extraData = null;

        internal SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(ExtraData_12_2_1_0 extraData)
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

            switch (requestType)
            {
                case Type _ when requestType == typeof(Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0) || requestName.ToUpper() == "EXPERIENCE_THE_MOVEMENT_TOFACEBOOKPAGE_DATATRANSFER_2_3_1_0":
                    var resolvedRequest = (object) Create_Experience_MovementToFacebookPage_DataTransfer_2_3_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    return resolvedRequest;

            }

            #endregion

            return null;
        }

        #region Page 1

        private object Create_Experience_MovementToFacebookPage_DataTransfer_2_3_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE"); 

            if (repositoryType == null) repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 experience = new Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0();

            experience.ClientOrServerInstance = _clientORserverInstance;

            experience.ExtraData = extraData;

            experience.MasterStorer = _centralizedStorer;
            experience.MasterDisturber = _centralizedDisturber;
            experience.MasterSensor = _centralizedSensor;

            experience.StorylineDetails = storylineDetails;
            experience.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCAL_FILE":
                    var localFile = new LocalFile_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(storylineDetails);

                    experience.Repository = localFile;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(storylineDetails);

                    experience.Repository = remoteService;

                    break;
                case "REMOTESERVICEVENDOR":
                    var remoteServiceVendor = new RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(storylineDetails);

                    experience.Repository = remoteServiceVendor;

                    break;
            }

            #endregion

            return experience;
        }

        #endregion
    }

    #endregion
}
