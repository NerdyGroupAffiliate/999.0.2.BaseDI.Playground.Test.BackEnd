using BaseDI.BackEnd.Director.CMS_1;

using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming_1;

using BaseDI.BackEnd.State.Security_1;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Story.CMS_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class CMSFactoryImplementer_NicheMaster_12_4_1_0 : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _clientORserverInstance;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private ExtraData_12_2_1_0 _extraData = null;

        private string _requestName = "";

        internal CMSFactoryImplementer_NicheMaster_12_4_1_0(ExtraData_12_2_1_0 extraData)
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

            #endregion

            #region PICK LOGIC ENTRYPOINT

            var requestType = requestToResolve.GetType();

            object resolvedRequest = null;

            _requestName = requestName;

            switch (_requestName.ToUpper())
            {
                case "DIRECTOR_OF_CMS_CHAPTER_12_4_PAGE_1_CREATEASSETTRANSPORTFROMONEPLACETOANOTHERALL_HANDLER_1_0":
                    resolvedRequest = Create_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    break;               
            }

            #endregion

            return resolvedRequest;
        }

        #region Page 1

        private object Create_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            var repositoryMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0((storylineDetails_Parameters) != null ? storylineDetails_Parameters : storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_MasterLeaderController", false);
            string repositoryType = ""; // repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == "") repositoryType = "LOCALFILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0 director = new Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0();
            
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
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = _requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0(storylineDetails);

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
