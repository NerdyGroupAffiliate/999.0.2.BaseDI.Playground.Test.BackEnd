#region Imports

#region BaseDI

using BaseDI.Director.Advertising_1;
using BaseDI.Director.Programming_1;
using BaseDI.Director.Programming_2;
using BaseDI.Director.Programming_3;
using BaseDI.Director.Programming_4;
using BaseDI.Director.Programming_5;
using BaseDI.Director.Risk_Management_3;
using BaseDI.Director.Risk_Management_4;

using BaseDI.Script.Programming.Abstract_1;
using BaseDI.Script.Programming.Extensions_1;
using BaseDI.Script.Programming.Poco_1;
using BaseDI.Script.Programming_1;
using BaseDI.State.Advertising_1;
using BaseDI.State.Programming_1;
using BaseDI.State.Programming_2;
using BaseDI.State.Programming_3;
using BaseDI.State.Programming_4;
using BaseDI.State.Programming_5;
using BaseDI.State.Programming_6;


#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;

#endregion 

#endregion

namespace BaseDI.Story.Programming_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        #region 1. Assign

        private Dictionary<string, object> _storedClientORserverInstance;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;

        private ExtraData_12_2_1_0 _storedExtraData = null;

        private string _storedRequestName = "";

        #endregion

        #region 2. Ready

        internal ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(ExtraData_12_2_1_0 extraData)
        {
            #region 1. INPUTS

            _storedClientORserverInstance = new Dictionary<string, object>();

            #endregion

            #region 2. VALUES

            #region MEMORIZE extra data

            _storedExtraData = extraData;

            #endregion

            #endregion

            #region 3. INPUT

            #region HANDLE niche setup

            #region *IDEA case*

            #region PROCESS niche defaults
            
            Setup();

            #endregion

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT


            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        public void Setup()
        {
            #region 1. INPUTS

            //[dataType] stored[SomeVariableName];
            //[dataType] stored[SomeVariableName];
            //[dataType] stored[SomeVariableName];

            #endregion

            #region 2. VALUES

            #region MEMORIZE xxxxxx xxxxxx


            #endregion

            #region MEMORIZE xxxxxx xxxxxx


            #endregion

            #region MEMORIZE xxxxxx xxxxxx


            #endregion

            #region MEMORIZE xxxxxx xxxxxx


            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE xxxxx xxxxx

            #region EDGE case

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #endregion

            #region EDGE case

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #endregion

            #region EDGE case

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #endregion

            #region *IDEA case*

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region HANDLE xxxxx xxxxx

            #region EDGE case

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #endregion

            #region EDGE case

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #endregion

            #region *IDEA case*

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #region [ACTIONNAME] xxxxx xxxxx

            #endregion

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region 4. Action


        #endregion

        public override object Action(Dictionary<string, object> clientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, object requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestName = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            #region ASSIGN MASTER LEADER

            _storedClientORserverInstance = clientORserverInstance;

            _storedCentralizedStorer = centralizedStorer;
            _storedCentralizedDisturber = centralizedDisturber;
            _storedCentralizedSensor = centralizedSensor;

            _storedExtraData.KeyValuePairs = new Dictionary<string, object>();

            _storedExtraData.KeyValuePairs.TryAdd("APILocationLocalNodeJS", APILocationLocalNodeJS);
            _storedExtraData.KeyValuePairs.TryAdd("APILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _storedExtraData.KeyValuePairs.TryAdd("APILocationRemote", APILocationRemote);

            _storedExtraData.KeyValuePairs.TryAdd("RequestToProcess", requestToProcess);
            _storedExtraData.KeyValuePairs.TryAdd("RequestToProcessParameters", requestToProcessParameters);

            AppSettings = (IConfiguration)_storedClientORserverInstance["appSettings"];

            #endregion

            #region ASSIGN REQUEST HANDLER

            var requestType = requestToResolve.GetType();

            object resolvedRequest = null;

            if (!string.IsNullOrEmpty(requestName))
            {
                switch(requestName.ToUpper(CultureInfo.CurrentCulture))
                {
                    //CONTROLLER
                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_1_REQUEST_CONTROLLER_1_0":
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                        break;

                    //CONVERSION
                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_2_REQUEST_CONVERSION_1_0":
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                        break;

                    //STORAGE
                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_3_REQUEST_STORAGE_1_0":
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                        break;

                    //DISTURBANCES
                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_4_REQUEST_DISTURBANCES_1_0":
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                        break;

                    //SENSOR
                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                        break;
                }
            }
            else
            {
                switch (requestType)
                {
                    case Type _ when requestType == typeof(Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0):
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                        break;
                }
            }

            #endregion

            return resolvedRequest;
        }

        #region Page 1

        private object Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER_12_2_PROGRAMMING_NICHE_MASTER"); 

            if (string.IsNullOrEmpty(repositoryType)) repositoryType = "LOCALFILE";

            #endregion         

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0();

            director.ClientOrServerInstance = _storedClientORserverInstance;

            director.ExtraData = extraData;

            director.MasterStorer = _storedCentralizedStorer;
            director.MasterDisturber = _storedCentralizedDisturber;
            director.MasterSensor = _storedCentralizedSensor;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCAL_FILE":
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 2

        private object Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES
            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0();

            director.ClientOrServerInstance = _storedClientORserverInstance;

            director.ExtraData = extraData;

            director.MasterStorer = _storedCentralizedStorer;
            director.MasterDisturber = _storedCentralizedDisturber;
            director.MasterSensor = _storedCentralizedSensor;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCAL_FILE":
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 3

        private object Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0();

            director.ClientOrServerInstance = _storedClientORserverInstance;

            director.ExtraData = extraData;

            director.MasterStorer = _storedCentralizedStorer;
            director.MasterDisturber = _storedCentralizedDisturber;
            director.MasterSensor = _storedCentralizedSensor;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCAL_FILE":
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 4

        private object Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0();

            director.ClientOrServerInstance = _storedClientORserverInstance;

            director.ExtraData = extraData;

            director.MasterStorer = _storedCentralizedStorer;
            director.MasterDisturber = _storedCentralizedDisturber;
            director.MasterSensor = _storedCentralizedSensor;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCAL_FILE":
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 5

        private object Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            
            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER"); 

            if (repositoryType == "") repositoryType = "LOCAL_FILE";

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0();

            director.ClientOrServerInstance = _storedClientORserverInstance;

            director.ExtraData = extraData;

            director.MasterStorer = _storedCentralizedStorer;
            director.MasterDisturber = _storedCentralizedDisturber;
            director.MasterSensor = _storedCentralizedSensor;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCAL_FILE":
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            return director;
        }

        #endregion
    }

    #endregion
}
