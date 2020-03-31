﻿using BaseDI.Playground.Test.Backend.Director.Advertising_1;
using BaseDI.Playground.Test.Backend.Director.Programming_1;
using BaseDI.Playground.Test.Backend.Director.Programming_2;
using BaseDI.Playground.Test.Backend.Director.Risk_Management_1;
using BaseDI.Playground.Test.Backend.Experience.Hear.Programming_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Extensions_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Poco_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;
using BaseDI.Playground.Test.Backend.State.Advertising_1;
using BaseDI.Playground.Test.Backend.State.Programming_1;
using BaseDI.Playground.Test.Backend.State.Programming_2;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Story.Programming_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class ProgrammingFactoryImplementer_NicheMaster_12_2_1_0<StoryRequest> : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _client;
        private object _centralizedMaster;

        private ExtraData_12_2_1_0 _extraData = null;

        internal ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(ExtraData_12_2_1_0 extraData)
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

            #region ASSIGN REQUEST HANDLER

            var requestType = requestToResolve.GetType();

            object resolvedRequest = null;

            if (requestType == null && !string.IsNullOrEmpty(requestName))
            {
                switch(requestName.ToUpper(CultureInfo.CurrentCulture))
                {
                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_1_REQUEST_HANDLER_1_0":
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                        break;

                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_2_REQUEST_MANAGER_1_0":
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                        break;

                    case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_2_1_0":
                        resolvedRequest = (object)Create_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                        break;
                }
            }
            else
            {
                switch (requestType)
                {
                    case Type _ when requestType == typeof(Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0):
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_RequestHandler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                        break;
                }
            }

            #endregion

            return resolvedRequest;
        }

        private object Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            throw new NotImplementedException();
        }

        #region Page 1

        private object Create_Director_Of_Programming_Chapter_12_2_Page_1_RequestHandler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = storylineDetails_Parameters.Step_X_X_Read_The_DataRepository_1_0(true, true);

            if (string.IsNullOrEmpty(repositoryType))
                repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;

                    break;
            }

            #endregion

            return director;
        }

        private object Create_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = storylineDetails_Parameters.Step_X_X_Read_The_DataRepository_1_0(true, true);

            if (string.IsNullOrEmpty(repositoryType))
                repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0 experience = new Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0();

            experience.Client = _client;

            experience.ExtraData = extraData;

            experience.MasterLeader = _centralizedMaster;

            experience.StorylineDetails = storylineDetails;
            experience.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCALFILE":
                    var localFile = new LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0(storylineDetails);

                    experience.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0(storylineDetails);

                    experience.Repository = remoteService;

                    break;
            }

            #endregion

            return experience;
        }

        #endregion

        #region Page 2

        private object Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = storylineDetails_Parameters.Step_X_X_Read_The_DataRepository_1_0(true, true);

            if (string.IsNullOrEmpty(repositoryType))
                repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0();

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
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0(storylineDetails);

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