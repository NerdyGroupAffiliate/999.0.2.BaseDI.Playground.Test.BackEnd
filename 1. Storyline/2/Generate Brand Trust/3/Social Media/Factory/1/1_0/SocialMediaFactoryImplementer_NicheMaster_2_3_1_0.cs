﻿using BaseDI.Playground.Test.Backend.Experience.Movement.Social_Media_1;
using BaseDI.Playground.Test.Backend.Experience.Movement.Social_Media_2;
using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Extensions_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Poco_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;
using BaseDI.Playground.Test.Backend.State.Social_Media_;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Story.Social_Media_3
{
    #region 6. Action Implementation

    internal class SocialMediaFactoryImplementer_NicheMaster_2_3_1_0<StoryRequest> : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _client;
        private object _centralizedStorer;

        private ExtraData_12_2_1_0 _extraData = null;

        internal SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(ExtraData_12_2_1_0 extraData)
        {
            //region 1. Assign
            _client = new Dictionary<string, object>();
            _centralizedStorer = new object();

            _extraData = extraData;

            //region 2. Action

            //region 3. Observe
        }

        public override object Action(Dictionary<string, object> client, object centralizedStorer, object requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestName = "")
        {
            #region ASSIGN MASTER LEADER

            _client = client;
            _centralizedStorer = centralizedStorer;

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

            return default(StoryRequest);
        }

        #region Page 1

        private object Create_Experience_MovementToFacebookPage_DataTransfer_2_3_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = storylineDetails_Parameters.Step_X_X_Read_The_DataRepository_1_0(true);

            if (string.IsNullOrEmpty(repositoryType))
                repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            #endregion

            #region ASSIGN REQUEST HANDLER

            Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 experience = new Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0();

            experience.Client = _client;

            experience.ExtraData = extraData;

            experience.MasterStorer = _centralizedStorer;

            experience.StorylineDetails = storylineDetails;
            experience.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCALFILE":
                    var localFile = new LocalFile_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(storylineDetails);

                    experience.Repository = localFile;

                    break;
                case "REMOTESERVICE":
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
