﻿using BaseDI.Playground.Test.Backend.Director.Web_Development_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Extensions_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Poco_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;
using BaseDI.Playground.Test.Backend.State.Web_Development_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Story.Web_Development_3
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0<StoryRequest> : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _client;
        private object _centralizedMaster;

        private ExtraData_12_2_1_0 _extraData = null;

        internal WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(ExtraData_12_2_1_0 extraData)
        {
            //region 1. Assign
            _client = new Dictionary<string, object>();
            _centralizedMaster = new object();

            _extraData = extraData;

            //region 2. Action

            //region 3. Observe
        }

        public override object Action(Dictionary<string, object> client, object centralizedMaster, object requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestName = "")
        {
            #region ASSIGN MASTER LEADER

            _client = client;
            _centralizedMaster = centralizedMaster;

            _extraData.KeyValuePairs.Add("APILocationLocalNodeJS", APILocationLocalNodeJS);
            _extraData.KeyValuePairs.Add("APILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _extraData.KeyValuePairs.Add("APILocationRemote", APILocationRemote);

            #endregion

            #region PICK LOGIC ENTRYPOINT

            var requestType = requestToResolve.GetType();

            switch (requestType)
            {
                case Type _ when requestType == typeof(Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebsiteForAll_Handler_1_0):
                    var resolvedRequest = (StoryRequest)Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebDevelopmentForWebsite_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    return resolvedRequest;
                default:
                    return default(StoryRequest);

            }

            #endregion
        }

        #region Page 1

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebDevelopmentForWebsite_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = storylineDetails_Parameters.Step_X_X_Read_The_DataRepository_1_0(true);

            if (string.IsNullOrEmpty(repositoryType))
                repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebsiteForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebsiteForAll_Handler_1_0();
            
            director.Client = _client;

            director.ExtraData = extraData;

            director.MasterLeader = _centralizedMaster;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebsiteForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebsiteForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;

                    break;
            }

            #endregion

            return director;
        }

        #endregion
    }

    #endregion
}