using BaseDI.BackEnd.Director.Web_Development_1;
using BaseDI.BackEnd.Experience.Hear.Web_Development_13;
using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming_1;
using BaseDI.BackEnd.State.Web_Development_13;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Story.Web_Development_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _client;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private ExtraData_12_2_1_0 _extraData = null;

        private string _requestName = "";

        internal WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(ExtraData_12_2_1_0 extraData)
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

            _extraData.KeyValuePairs.TryAdd("APILocationLocalNodeJS", APILocationLocalNodeJS);
            _extraData.KeyValuePairs.TryAdd("APILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _extraData.KeyValuePairs.TryAdd("APILocationRemote", APILocationRemote);

            #endregion

            #region PICK LOGIC ENTRYPOINT

            var requestType = requestToResolve.GetType();

            object resolvedRequest = null;

            switch (requestType)
            {
                case Type _ when requestType == typeof(Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0):
                    resolvedRequest = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebDevelopmentForWebsite_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    return resolvedRequest;

                case Type _ when requestType == typeof(Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0):
                    resolvedRequest = Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

                    return resolvedRequest;

                default:
                    return default(Object);

            }

            #endregion
        }

        #region Page 1

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebDevelopmentForWebsite_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null)
        {
            #region CHECK FOR MISTAKES

            List<JToken> repositoryMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0((storylineDetails_Parameters) != null ? storylineDetails_Parameters : storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_MasterLeaderController", false);

            string repositoryType = ""; // repositoryMetaData.

            if (repositoryType == null) repositoryType = "LOCALFILE";

            #endregion

            #region ASSIGN REQUEST HANDLER

            Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 director = new Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0();
            
            director.Client = _client;

            director.ExtraData = extraData;

            director.MasterStorer = _centralizedStorer;
            director.MasterDisturber = _centralizedDisturber;
            director.MasterSensor = _centralizedSensor;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            //switch (repositoryType.ToUpper(CultureInfo.CurrentCulture))
            //{
            //    case "LOCALFILE":
            //        var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebsiteForAll_Handler_1_0(storylineDetails);

            //        director.Repository = localFile;

            //        break;
            //    case "REMOTESERVICE":
            //        var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateWebsiteForAll_Handler_1_0(storylineDetails);

            //        director.Repository = remoteService;

            //        break;
            //}

            #endregion

            return director;
        }

        #endregion

        #region Page X

        private object Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            List<JToken> repositoryMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0((storylineDetails_Parameters) != null ? storylineDetails_Parameters : storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_MasterLeaderController", false);

            string repositoryType = ""; // repositoryMetaData.

            if (repositoryType == null) repositoryType = "LOCALFILE";

            #endregion       

            #region ASSIGN REQUEST HANDLER

            Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 experience = new Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0();

            experience.Client = _client;

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
                case "LOCALFILE":
                    var localFile = new LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(storylineDetails);

                    experience.Repository = localFile;
                    experience.Repository.RequestName = _requestName;

                    break;
                case "REMOTESERVICE":
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
