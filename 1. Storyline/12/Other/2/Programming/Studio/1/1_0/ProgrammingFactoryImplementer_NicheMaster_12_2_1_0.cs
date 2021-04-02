#region Imports

#region BaseDI

using BaseDI.Professional.Director.Advertising_1;
using BaseDI.Professional.Director.Programming_1;
using BaseDI.Professional.Director.Programming_2;
using BaseDI.Professional.Director.Programming_3;
using BaseDI.Professional.Director.Programming_4;
using BaseDI.Professional.Director.Programming_5;
using BaseDI.Professional.Director.Risk_Management_3;
using BaseDI.Professional.Director.Risk_Management_4;

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.State.Advertising_1;
using BaseDI.Professional.State.Programming_1;
using BaseDI.Professional.State.Programming_2;
using BaseDI.Professional.State.Programming_3;
using BaseDI.Professional.State.Programming_4;
using BaseDI.Professional.State.Programming_5;
using BaseDI.Professional.State.Programming_6;


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

namespace BaseDI.Professional.Story.Programming_1
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

        public override object Action(Dictionary<string, object> parameterClientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedSensor, object parameterRequestToResolve, JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, string parameterRequestName = "", string parameterRequestToProcess = "", string parameterRequestToProcessParameters = "")
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

            _storedAppSettings = (IConfiguration)parameterClientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE centralized processes   

            _storedCentralizedStorer = parameterCentralizedStorer;
            _storedCentralizedDisturber = parameterCentralizedDisturber;
            _storedCentralizedSensor = parameterCentralizedSensor;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = parameterClientORserverInstance;

            #endregion

            #region MEMORIZE client request

            _storedExtraData.KeyValuePairs = new Dictionary<string, object>();
            _storedExtraData.KeyValuePairs.TryAdd("RequestToProcess", parameterRequestToProcess);
            _storedExtraData.KeyValuePairs.TryAdd("RequestToProcessParameters", parameterRequestToProcessParameters);

            var storedRequestType = parameterRequestToResolve.GetType();

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region GENERATE request handler                     

                #region IDEAL CASE - USE director of programming

                if (!string.IsNullOrEmpty(parameterRequestName))
                {
                    switch (parameterRequestName.ToUpper(CultureInfo.CurrentCulture))
                    {
                        //CONTROLLER
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_1_REQUEST_CONTROLLER_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, _storedExtraData);

                            break;

                        //CONVERSION
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_2_REQUEST_CONVERSION_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, _storedExtraData);

                            break;

                        //STORAGE
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_3_REQUEST_STORAGE_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, _storedExtraData);

                            break;

                        //DISTURBANCES
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_4_REQUEST_DISTURBANCES_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, _storedExtraData);

                            break;

                        //SENSOR
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, _storedExtraData);

                            break;
                    }
                }
                else
                {
                    switch (storedRequestType)
                    {
                        case Type _ when storedRequestType == typeof(Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0):
                            storedResolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, _storedExtraData);

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

        private object Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, ExtraData_12_2_1_0 parameterExtraData)
        {
            #region 1. INPUTS  

            #region MEMORIZE data access stragety

            string repositoryType = AppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER_12_2_PROGRAMMING_NICHE_MASTER");

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region DEFINE request handler

            Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 stored_DirectorRequestHandler = null;

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

                stored_DirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0();

                stored_DirectorRequestHandler.ClientOrServerInstance = _storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = _storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = _storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = _storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
                {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                }

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0*** - USING data stragety of " + repositoryType + "]");
                }                    

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0*** - USING data stragety of " + repositoryType);
                }
   
                #endregion

                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE a director

            return stored_DirectorRequestHandler;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 2

        private object Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, ExtraData_12_2_1_0 parameterExtraData)
        {
            #region 1. INPUTS    

            #region DEFINE request handler

            Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 stored_DirectorRequestHandler = null;

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

                stored_DirectorRequestHandler.ClientOrServerInstance = _storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = _storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = _storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = _storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
                {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                }

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0*** - USING data stragety of " + repositoryType + "]");
                }

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0*** - USING data stragety of " + repositoryType);
                }
        
                #endregion

                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE director of programming

            return stored_DirectorRequestHandler;

            #endregion

            #endregion

            #endregion    
        }

        #endregion

        #region Page 3

        private object Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, ExtraData_12_2_1_0 parameterExtraData)
        {
            #region 1. INPUTS  

            #region DEFINE request handler

            Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 stored_DirectorRequestHandler = null;

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

                stored_DirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0();

                stored_DirectorRequestHandler.ClientOrServerInstance = _storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = _storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = _storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = _storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
                {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                }

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0*** - USING data stragety of " + repositoryType + "]");
                }
      
                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0*** - USING data stragety of " + repositoryType);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE director of programming

            return stored_DirectorRequestHandler;

            #endregion

            #endregion

            #endregion    
        }

        #endregion

        #region Page 4

        private object Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, ExtraData_12_2_1_0 parameterExtraData)
        {
            #region 1. INPUTS  

            #region DEFINE request handler

            Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 stored_DirectorRequestHandler = null;

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

                stored_DirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0();

                stored_DirectorRequestHandler.ClientOrServerInstance = _storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = _storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = _storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = _storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
                {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                }

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0*** - USING data stragety of " + repositoryType + "]");
                }

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0*** - USING data stragety of " + repositoryType);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE director of programming

            return stored_DirectorRequestHandler;

            #endregion

            #endregion

            #endregion    
        }

        #endregion

        #region Page 5

        private object Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, ExtraData_12_2_1_0 parameterExtraData)
        {
            #region 1. INPUTS

            #region DEFINE request handler

            Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 stored_DirectorRequestHandler = null;

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

                stored_DirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0();

                stored_DirectorRequestHandler.ClientOrServerInstance = _storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = _storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = _storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = _storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
                {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = _storedRequestName;

                        break;
                }

                #endregion

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0*** - USING data stragety of " + repositoryType + "]");
                }

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0*** - USING data stragety of " + repositoryType);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE director of programming

            return stored_DirectorRequestHandler;

            #endregion

            #endregion

            #endregion 
        }

        #endregion

        #endregion
    }

    #endregion
}
