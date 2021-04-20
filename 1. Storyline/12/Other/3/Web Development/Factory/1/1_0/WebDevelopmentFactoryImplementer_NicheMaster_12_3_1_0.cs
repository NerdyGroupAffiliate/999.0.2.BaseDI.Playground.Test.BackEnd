using BaseDI.Professional.Director.Web_Development_1;
using BaseDI.Professional.Director.Web_Development_10;
using BaseDI.Professional.Director.Web_Development_11;
using BaseDI.Professional.Director.Web_Development_12;
using BaseDI.Professional.Director.Web_Development_2;
using BaseDI.Professional.Director.Web_Development_3;
using BaseDI.Professional.Director.Web_Development_4;
using BaseDI.Professional.Director.Web_Development_5;
using BaseDI.Professional.Director.Web_Development_6;
using BaseDI.Professional.Director.Web_Development_7;
using BaseDI.Professional.Director.Web_Development_8;
using BaseDI.Professional.Director.Web_Development_9;
using BaseDI.Professional.Experience.Hear.Web_Development_13;
using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.State.Web_Development_1;
using BaseDI.Professional.State.Web_Development_10;
using BaseDI.Professional.State.Web_Development_11;
using BaseDI.Professional.State.Web_Development_12;
using BaseDI.Professional.State.Web_Development_13;
using BaseDI.Professional.State.Web_Development_2;
using BaseDI.Professional.State.Web_Development_3;
using BaseDI.Professional.State.Web_Development_4;
using BaseDI.Professional.State.Web_Development_5;
using BaseDI.Professional.State.Web_Development_7;
using BaseDI.Professional.State.Web_Development_8;
using BaseDI.Professional.State.Web_Development_9;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.Professional.Story.Web_Development_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _clientORserverInstance;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private ExtraData_12_2_1_0 _extraData = null;

        private string _requestName = "";

        internal WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(ExtraData_12_2_1_0 extraData)
        {
            //region 1. Assign
            _clientORserverInstance = new Dictionary<string, object>();

            _extraData = extraData;

            //region 2. Action

            //region 3. Observe
        }

        public override async Task<object> Action(SingleParmPoco_12_2_1_0 parameterInputs)
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

            #region PICK LOGIC ENTRYPOINT

            var requestType = requestToResolve.GetType();

            object resolvedRequest = null;

            _requestName = requestName;

            switch (_requestName.ToUpper())
            {
                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_CREATEHOMESCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;
                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_9_READMEMBERSHIPSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;

                case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0":
                    resolvedRequest = Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;
            }

            #endregion

            return resolvedRequest;
        }

        #region Page 1

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES
            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0();
            
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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 2

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 3

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 4

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 5

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 6

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 7

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 8

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 9

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 10

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 11

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 12

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0();

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 13

        private object Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES
            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 experience = new Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0();

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
                    var localFile = new LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(storylineDetails);

                    experience.Repository = localFile;
                    experience.Repository.RequestName = _requestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(storylineDetails);

                    experience.Repository = remoteService;
                    experience.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return experience;
        }

        #endregion
    }

    #endregion
}
