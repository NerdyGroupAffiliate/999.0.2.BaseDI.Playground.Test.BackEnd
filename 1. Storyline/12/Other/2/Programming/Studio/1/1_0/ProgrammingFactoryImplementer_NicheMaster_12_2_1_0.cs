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

        //SETTINGS
        private IConfiguration _storedAppSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedClientORserverInstance;
        private string _storedRequestName = "";

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData = null;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;

        #endregion

        #region 2. Ready

        internal ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(ExtraData_12_2_1_0 extraData)
        {
            #region 1. INPUTS

            #region DEFINE clientOrServer instance

            _storedClientORserverInstance = new Dictionary<string, object>();

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = extraData;

            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE niche setup

            #region EDGE CASE - USE niche faults

            Setup();

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

            #endregion

            #region 2. PROCESS


            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action


        #endregion

        public override object Action(Dictionary<string, object> clientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, object requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestName = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            #region 1. INPUTS  

            #region DECLARE request handler

            object storedResolvedRequest = null;

            #endregion

            #region MEMORIZE api data

            _storedExtraData.KeyValuePairs.TryAdd("APILocationLocalNodeJS", APILocationLocalNodeJS);
            _storedExtraData.KeyValuePairs.TryAdd("APILocationLocalNodeJS_SSL", APILocationLocalNodeJS_SSL);

            _storedExtraData.KeyValuePairs.TryAdd("APILocationLocalDotNetCore", APILocationLocalDotNetCore);
            _storedExtraData.KeyValuePairs.TryAdd("APILocationLocalDotNetCore_SSL", APILocationLocalDotNetCore_SSL);

            _storedExtraData.KeyValuePairs.TryAdd("APILocationRemote", APILocationRemote);

            #endregion

            #region MEMORIZE app settings

            AppSettings = (IConfiguration)clientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE centralized processes   

            _storedCentralizedStorer = centralizedStorer;
            _storedCentralizedDisturber = centralizedDisturber;
            _storedCentralizedSensor = centralizedSensor;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = clientORserverInstance;

            #endregion

            #region MEMORIZE client request

            _storedExtraData.KeyValuePairs = new Dictionary<string, object>();
            _storedExtraData.KeyValuePairs.TryAdd("RequestToProcess", requestToProcess);
            _storedExtraData.KeyValuePairs.TryAdd("RequestToProcessParameters", requestToProcessParameters);

            var storedRequestType = requestToResolve.GetType();

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region GENERATE programming request object                     

                #region IDEAL CASE - USE director of programming

                if (!string.IsNullOrEmpty(requestName))
                {
                    switch (requestName.ToUpper(CultureInfo.CurrentCulture))
                    {
                        //CONTROLLER
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_1_REQUEST_CONTROLLER_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                            break;

                        //CONVERSION
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_2_REQUEST_CONVERSION_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                            break;

                        //STORAGE
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_3_REQUEST_STORAGE_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                            break;

                        //DISTURBANCES
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_4_REQUEST_DISTURBANCES_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                            break;

                        //SENSOR
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                            break;
                    }
                }
                else
                {
                    switch (storedRequestType)
                    {
                        case Type _ when storedRequestType == typeof(Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0):
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails, storylineDetails_Parameters, _storedExtraData);

                            break;
                    }
                }

                #endregion

                #endregion
            }
            catch 
            {
                throw;
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE director of programming

            return storedResolvedRequest;

            #endregion


            #endregion

            #endregion
        }

        #region Page 1

        private object Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region 1. INPUTS  

            #region MEMORIZE data access stragety

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER_12_2_PROGRAMMING_NICHE_MASTER");

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion


            #region 2. PROCESS

            #region GENERATE programming request object 

            try
            {
                #region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                #endregion

                #region IDEAL CASE - USE director of programming

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                    Console.WriteLine("STEP 2 - EXECUTING REQUEST - FOUND a request handler of ***Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0*** -> ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 -> USING data stragety of " + repositoryType);

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion

            #region CHECK FOR MISTAKES



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
            #region 1. INPUTS    

            #region DECLARE director request object

            Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 storedDirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0();

            #endregion

            #region MEMORIZE data access stragety

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER_12_2_PROGRAMMING_NICHE_MASTER");

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region GENERATE programming request object 

            try
            {
                #region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                #endregion

                #region IDEAL CASE - USE director of programming

                storedDirectorRequestHandler.ClientOrServerInstance = _storedClientORserverInstance;

                storedDirectorRequestHandler.ExtraData = extraData;

                storedDirectorRequestHandler.MasterStorer = _storedCentralizedStorer;
                storedDirectorRequestHandler.MasterDisturber = _storedCentralizedDisturber;
                storedDirectorRequestHandler.MasterSensor = _storedCentralizedSensor;

                storedDirectorRequestHandler.StorylineDetails = storylineDetails;
                storedDirectorRequestHandler.StorylineDetails_Parameters = storylineDetails_Parameters;

                switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
                {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails);

                        storedDirectorRequestHandler.Repository = localFile;
                        storedDirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails);

                        storedDirectorRequestHandler.Repository = remoteService;
                        storedDirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                }

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                    Console.WriteLine("STEP 2 - EXECUTING REQUEST - ***SUCCESSFULLY FOUND*** a request handler of ***Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0*** -> ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 -> USING data stragety of " + repositoryType);

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                    Console.WriteLine("STEP 2 - EXECUTING REQUEST - ***FAILED FINDING*** a request handler for ***Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0*** -> ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 -> USING data stragety of " + repositoryType);

                #endregion

                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE director of programming

            return storedDirectorRequestHandler;

            #endregion


            #endregion

            #endregion    
        }

        #endregion

        #region Page 3

        private object Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region 1. INPUTS  

            #region MEMORIZE data access stragety

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER_12_2_PROGRAMMING_NICHE_MASTER");

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region GENERATE programming request object 

            try
            {
                #region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                #endregion

                #region IDEAL CASE - USE director of programming

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                    Console.WriteLine("STEP 2 - EXECUTING REQUEST - FOUND a request handler of ***Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0*** -> ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 -> USING data stragety of " + repositoryType);

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

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
            #region 1. INPUTS  

            #region MEMORIZE data access stragety

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER_12_2_PROGRAMMING_NICHE_MASTER");

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region GENERATE programming request object 

            try
            {
                #region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                #endregion

                #region IDEAL CASE - USE director of programming

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                    Console.WriteLine("STEP 2 - EXECUTING REQUEST - FOUND a request handler of ***Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0*** -> ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 -> USING data stragety of " + repositoryType);

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion

            #region CHECK FOR MISTAKES

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
            #region 1. INPUTS     

            #region MEMORIZE data access stragety

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER_12_2_PROGRAMMING_NICHE_MASTER");

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion


            #region 2. PROCESS

            #region GENERATE programming request object 

            try
            {
                #region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                #endregion

                #region IDEAL CASE - USE director of programming

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                    Console.WriteLine("STEP 2 - EXECUTING REQUEST - FOUND a request handler of ***Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0*** -> ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 -> USING data stragety of " + repositoryType);

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion

            #region CHECK FOR MISTAKES

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
