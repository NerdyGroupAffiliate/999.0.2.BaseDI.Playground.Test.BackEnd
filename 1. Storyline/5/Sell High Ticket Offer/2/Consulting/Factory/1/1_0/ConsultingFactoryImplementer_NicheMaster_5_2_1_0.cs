
using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Story.Consulting_2
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class ConsultingFactoryImplementer_NicheMaster_5_2_1_0<StoryRequest> : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        private Dictionary<string, object> _client;
        private object _centralizedStorer;

        private ExtraData_12_2_1_0 _extraData = null;

        internal ConsultingFactoryImplementer_NicheMaster_5_2_1_0(ExtraData_12_2_1_0 extraData)
        {
            //region 1. Assign
            _client = new Dictionary<string, object>();
            _centralizedStorer = new object();

            _extraData = extraData;

            //region 2. Action

            //region 3. Observe
        }

        public override object Action(Dictionary<string, object> client, object centralizedStorer, object requestToResolve, JObject storylineDetails, JObject storylineDetails_Parameters, string requestName = "")
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

            //switch (requestType)
            //{
            //    case Type _ when requestType == typeof(Direct_Programming_Chapter_12_2_Page_1_ReadAndHandleRequest_1_0):
            //        var resolvedRequest = (StoryRequest)await Create_Director_Of_Programming_Chapter_12_2_Page_1_ReadApiRoute_1_0(storylineDetails, storylineDetails_Parameters, _extraData);

            //        return resolvedRequest;
            //    default:
            //        return default(StoryRequest);

            //}

            return null;

            #endregion
        }

        #region Page 1

        private object Create_Director_Of_Programming_Chapter_12_2_Page_1_ReadApiRoute_1_0(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData)
        {
            #region CHECK FOR MISTAKES

            string repositoryType = storylineDetails_Parameters.Step_X_X_Read_The_DataRepository_1_0(true);

            if (string.IsNullOrEmpty(repositoryType))
                repositoryType = storylineDetails.Step_X_X_Read_The_DataRepository_1_0(true);

            #endregion

            #region ASSIGN REQUEST HANDLER

            //Direct_Programming_Chapter_12_2_Page_1_ReadAndHandleRequest_1_0 director = new Direct_Programming_Chapter_12_2_Page_1_ReadAndHandleRequest_1_0();

            //director.Client = _client;

            //director.ExtraData = extraData;

            //director.MasterStorer = _centralizedStorer;;

            //director.StorylineDetails = storylineDetails;
            //director.StorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region ASSIGN LOGIC REPOSITORY

            //switch (repositoryType.ToUpper())
            //{
            //    case "LOCALFILE":
            //        var localFile = new LocalFile_Direct_Programming_Chapter_12_2_Page_1_ReadApiRoute_1_0(storylineDetails);

            //        director.Repository = localFile;

            //        break;
            //    case "REMOTESERVICE":
            //        var remoteService = new RemoteService_Direct_Programming_Chapter_12_2_Page_1_ReadApiRoute_1_0(storylineDetails);

            //        director.Repository = remoteService;

            //        break;
            //}

            #endregion

            return default(StoryRequest);
        }

        #endregion
    }

    #endregion
}
