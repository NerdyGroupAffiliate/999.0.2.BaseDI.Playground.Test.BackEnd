using BaseDI.BackEnd.Director.Risk_Management_1;
using BaseDI.BackEnd.Director.Risk_Management_2;
using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming_1;
using BaseDI.BackEnd.State.Risk_Management_;
using BaseDI.BackEnd.State.Risk_Management_1;
using BaseDI.BackEnd.State.Risk_Management_2;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Story.Risk_Management_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class RiskManagementFactoryTester_NicheMaster_11_1_1_0<StoryRequest> : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _client;
        private object _centralizedStorer;

        private ExtraData_12_2_1_0 _extraData = null;

        internal RiskManagementFactoryTester_NicheMaster_11_1_1_0(ExtraData_12_2_1_0 extraData)
        {
            //region 1. Assign
            _client = new Dictionary<string, object>();
            _centralizedStorer = new object();

            _extraData = extraData;

            //region 2. Action

            //region 3. Observe
        }

        public override object Action(Dictionary<string, object> client, object centralizedStorer, object requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestName = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            #region ASSIGN MASTER LEADER

            _client = client;
            _centralizedStorer = centralizedStorer;

            _extraData.KeyValuePairs.Add("APILocationLocalNodeJS", APILocationLocalNodeJS);
            _extraData.KeyValuePairs.Add("APILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _extraData.KeyValuePairs.Add("APILocationRemote", APILocationRemote);

            #endregion

            #region ASSIGN REQUEST HANDLER

            var requestType = requestToResolve.GetType();

            switch (requestType)
            {
                case Type _ when requestType == typeof(Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0):
                    var resolvedRequest1 = (StoryRequest)Create_Director_Of_RiskManagement_Chapter_11_1_Page_1_ReadAndHandleMistakes_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    return resolvedRequest1;
                case Type _ when requestType == typeof(Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0):
                    var resolvedRequest2 = (StoryRequest)Create_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    return resolvedRequest2;
                default:
                    return default(StoryRequest);
            }

            #endregion
        }

        #region Page 1

        private object Create_Director_Of_RiskManagement_Chapter_11_1_Page_1_ReadAndHandleMistakes_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = storylineDetails_Parameters.Step_X_X_Read_The_DataRepository_1_0(true);

            if (string.IsNullOrEmpty(repositoryType))
                repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0 director = new Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0();

            director.Client = _client;

            director.ExtraData = extraData;

            director.MasterStorer = _centralizedStorer;;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;

                    break;
                case "REMOTESERVICEVENDOR":
                    var remoteServiceVendor = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0(storylineDetails);

                    director.Repository = remoteServiceVendor;

                    break;
            }

            #endregion

            return director;
        }

        #endregion

        #region Page 2

        private object Create_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0 director = new Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0();
            
            director.Client = _client;

            director.ExtraData = extraData;

            director.MasterStorer = _centralizedStorer;;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            {
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0(storylineDetails);

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
