using BaseDI.BackEnd.Director.Advertising_1;
using BaseDI.BackEnd.Director.Programming_1;
using BaseDI.BackEnd.Director.Programming_2;
using BaseDI.BackEnd.Director.Programming_5;
using BaseDI.BackEnd.Director.Risk_Management_1;
using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming_1;
using BaseDI.BackEnd.State.Advertising_1;
using BaseDI.BackEnd.State.Programming_1;
using BaseDI.BackEnd.State.Programming_2;
using BaseDI.BackEnd.State.Programming_5;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Story.Programming_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class ProgrammingFactoryImplementer_NicheMaster_12_2_1_0<StoryRequest> : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _client;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private ExtraData_12_2_1_0 _extraData = null;

        private string _requestName = "";

        internal ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(ExtraData_12_2_1_0 extraData)
        {
            //region 1. Assign
            _client = new Dictionary<string, object>();
            _extraData = extraData;

            //region 2. Action

            //region 3. Observe
        }

        public override object Action(Dictionary<string, object> client, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, object requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestName = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            #region ASSIGN MASTER LEADER

            _client = client;
            _centralizedStorer = centralizedStorer;
            _centralizedDisturber = centralizedDisturber;
            _centralizedSensor = centralizedSensor;

            _extraData.KeyValuePairs.Add("APILocationLocalNodeJS", APILocationLocalNodeJS);
            _extraData.KeyValuePairs.Add("APILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _extraData.KeyValuePairs.Add("APILocationRemote", APILocationRemote);

            _extraData.KeyValuePairs.Add("RequestToProcess", requestToProcess);
            _extraData.KeyValuePairs.Add("RequestToProcessParameters", requestToProcessParameters);

            #endregion

            #region ASSIGN REQUEST HANDLER

            var requestType = requestToResolve.GetType();

            object resolvedRequest = null;

            if (requestType == null && !string.IsNullOrEmpty(requestName))
            {
                switch(requestName.ToUpper(CultureInfo.CurrentCulture))
                {
                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_1_REQUEST_CONTROLLER_1_0":
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                        break;

                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                        break;
                }
            }
            else
            {
                switch (requestType)
                {
                    case Type _ when requestType == typeof(Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0):
                        resolvedRequest = (object)Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

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

            string repositoryType = storylineDetails_Parameters.Step_X_X_Read_The_DataRepository_1_0(true, true);

            if (string.IsNullOrEmpty(repositoryType))
                repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            if (repositoryType == "") repositoryType = "LOCALFILE";

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0();

            director.Client = _client;

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
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }

        private object Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = storylineDetails_Parameters.Step_X_X_Read_The_DataRepository_1_0(true, true);

            if (string.IsNullOrEmpty(repositoryType))
                repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            if (repositoryType == "") repositoryType = "LOCALFILE";

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 director = new Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0();

            director.Client = _client;

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
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = _requestName;

                    break;
            }

            #endregion

            return director;
        }


        #endregion
    }

    #endregion
}
