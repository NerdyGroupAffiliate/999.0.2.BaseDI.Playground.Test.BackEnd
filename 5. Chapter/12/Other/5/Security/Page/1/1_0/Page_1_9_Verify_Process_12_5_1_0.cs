using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Extensions_3;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming.Repository_1;
using BaseDI.BackEnd.Script.Programming_1;
using BaseDI.BackEnd.Script.Security.Extensions_1;
using BaseDI.BackEnd.Script.Web_Development.Extensions_13;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Chapter.Page.Security_1
{
    public class Page_1_9_Verify_Process_12_5_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   
        private JContainer _apiMetaData = null;

        private string _actionName = "";

        private string _entryPointName = "Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

        private string _pageName = "Page_1_9_Verify_Process_12_5_1_0";
        private string _processKey = "Page_1_9_Verify_Process_12_5_1_0";

        private HttpRequest _request = null;
        private HttpResponse _response = null;
        private string _requestRoute = null;
        private string _requestVerb = null;

        internal Dictionary<string, object> _serverInfo;
        private Object _server = null;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_9_Verify_Process_12_5_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.
            StorylineDetails = storylineDetails;
            Repository = repository;

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            //Line 1: The opening “div” tag will hard coded by the software program.

            //Line 1: The “class attribute class prefix” of “The_WebClient-Help_Build_Website_Foundation-“
            //will be hard coded by the software program.

            //Line 1: 
            //  1. This is the “Theme’s Brand Name” produced by the table column to the right.
            //  2. This is the “Theme’s Brand Product Name” produced by the table column to the right.
            //  3. This is the “Theme’s Version Number” produced by the table column to the right.
            //  4. This is the “Foundation’s Secondary Niche” produced by the table column to the right.
            //  5. This is the “Foundation’s Main Niche” produced by the table column to the right.
            //     4 and 5 are refers to an Ezines.com Niche
            //     These are referenced in the PerformanceArts database that holds storyline information.
            //  6. This is the “Foundation’s Version Number” produced by the table column to the right.

            //Example: The_WebClient_1 – Help_Build_Website_Foundation – Apple_iTunes–1-1-WebDesign_Music–1_0

            //Set a reference to our the details of our storyline.
            #region DESCRIBE THE MEMORIES

            #endregion

            #region RECALL THE MEMORIES

            _serverInfo = (Dictionary<string, object>)Client;
            _server = _serverInfo.ContainsKey("Server") ? _serverInfo["Server"] : null;

            #endregion

            #region EXECUTE THE VISION

            #region CONTROL

            if (_server != null)
            {
                await Step_1_0_Custom_Control_ServerAuthenticationToAPI_1_0();
            }

            #endregion

            #endregion

            #region REPORT THE FEEDBACK

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

            #endregion
        }

        #region CLIENT SIDE CODE

        #endregion

        #region SERVER SIDE CODE

        #region CONTROL

        public async Task Step_1_0_Custom_Control_ServerAuthenticationToAPI_1_0()
        {
            #region DESCRIBE THE MEMORIES

            #endregion

            #region RECALL THE MEMORIES

            JObject storylineDetails = StorylineDetails;

            _apiMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(storylineDetails, "key_1", "APIS", false).SingleOrDefault().Parent.Parent;

            _actionName = _serverInfo.ContainsKey("actionName") ? (string)_serverInfo["actionName"] : null;

            _request = _serverInfo.ContainsKey("Request") ? (HttpRequest)_serverInfo["Request"] : null;

            if (_request != null)
            {
                _requestRoute = _request.Path;
                _requestVerb = _request.Method;
            }

            //_serverEntryPoint = _serverInfo.ContainsKey("Server") ? _serverInfo["Server"] : null;

            //_request = Client?.Request;
            //_requestRoute = _request?.route?.path;
            //_response = Client?.Response;

            //_server = Client?.Server;

            #endregion

            #region EXECUTE THE VISION

            #region CONTROL

            if (_server != null)
            {
                if (_requestRoute.ToUpper().Contains("AUTHREQUEST")|| _actionName.ToUpper().Contains("AUTHREQUEST"))
                {
                    await Step_2_0_Custom_Transport_ServerAuthenticationRequestToAPI_1_0();
                }

                if (_requestRoute.ToUpper().Contains("AUTHRESPONSE") || _actionName.ToUpper().Contains("AUTHRESPONSE"))
                {
                    await Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0();
                }
            }

            #endregion

            #endregion

            #region REPORT THE FEEDBACK

            #endregion
        }

        #endregion

        #region TRANSPORT

        public async Task Step_2_0_Custom_Transport_ServerAuthenticationRequestToAPI_1_0()
        {
            #region DESCRIBE THE MEMORIES

            #endregion

            #region RECALL THE MEMORIES

            #endregion

            #region EXECUTE THE VISION

            if (_request != null)
            {
                string api = _request.Query.ContainsKey("API") ? _request.Query["API"][0].ToString() : null;

                if (_requestRoute != null)
                {
                    if (api != null)
                    {
                        switch (api.ToUpper())
                        {
                            case "MICROSOFT":
                            case "MICROSOFTGRAPH":
                                await Step_2_1_Custom_Transport_ServerAuthenticationRequestToAPI_1_0_Microsoft();

                                break;
                        }
                    }
                }
            }

            #endregion

            #region REPORT THE FEEDBACK

            #endregion
        }

        #region MICROSOFT

        public async Task Step_2_1_Custom_Transport_ServerAuthenticationRequestToAPI_1_0_Microsoft()
        {
            #region DESCRIBE THE MEMORIES

            Func<Object, Object> callBack = null;
            
            JObject curlClientOptions;

            JContainer microsoftProfile = null;
            dynamic microsoftProfileDetails = null;
            dynamic microsoftProfileDetailsAPIEndPointsAndRoutes = null;
            dynamic microsoftProfileDetailsSecurityAPISecurityDetails = null;

            string microsoftTokenEndpoint = "";

            #endregion

            #region RECALL THE MEMORIES
  
            microsoftProfile = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(_apiMetaData as JObject, "searchkey", "SetupDetails_APIS_API_1_0_MicrosoftGraph_2_2_2_1_serverInformationSetupDetails", false).SingleOrDefault().Parent.Parent;
            microsoftProfileDetails = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(microsoftProfile as JObject, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false).SingleOrDefault().Parent.Parent;
            microsoftProfileDetailsAPIEndPointsAndRoutes =  microsoftProfileDetails.value.SetupItemAPIProfile.SetupItemAPIEndPointsAndRoutes;
            microsoftProfileDetailsSecurityAPISecurityDetails = microsoftProfileDetails.value.SetupItemAPIProfile.SetupItemAPISecurityDetails;

            curlClientOptions = null;
            //    {
            //header:[
            //        "Content-Type: application/x-www-form-urlencoded"],
            //    data:[
            //        "grant_type=client_credentials",
            //        "client_id=" + microsoftProfileDetailsSecurityAPISecurityDetails.SetupItemAPISecurityAppID,
            //        "client_secret=" + microsoftProfileDetailsSecurityAPISecurityDetails.SetupItemAPISecurityPassword,
            //        "scope=" + microsoftProfileDetailsAPIEndPointsAndRoutes.SetupItemAPIScope
            //    ]
            //}

            microsoftTokenEndpoint = microsoftProfileDetailsAPIEndPointsAndRoutes.SetupItemAPIBaseEndpoint + microsoftProfileDetailsSecurityAPISecurityDetails.SetupItemAPISecurityCustomerID + microsoftProfileDetailsAPIEndPointsAndRoutes.SetupItemAPITokenRoute;

            #endregion

            #region EXECUTE THE VISION

            #region TRANSPORT

            Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Output_ServerResponseToCaller_1_0(_server, microsoftTokenEndpoint, "POST", curlClientOptions,(dynamic response) =>
            {
                Step_3_1_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft(response, microsoftProfileDetailsSecurityAPISecurityDetails);

                return null;
            });

            #endregion

            #endregion

            #region REPORT THE FEEDBACK

            #endregion
        }

        #endregion

        #endregion

        #region OUTPUT

        private async Task Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0()
        {
            #region DESCRIBE THE MEMORIES

            #endregion

            #region RECALL THE MEMORIES

            #endregion

            #region EXECUTE THE VISION

            #endregion

            #region REPORT THE FEEDBACK

            #endregion
        }

        #region MICROSOFT

        private async Task Step_3_1_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft(Object response, SingleParmPoco_12_2_1_0 extraData = null)
        {
            #region DESCRIBE THE MEMORIES

            #endregion

            #region RECALL THE MEMORIES


            #endregion

            #region EXECUTE THE VISION         

            await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(MasterStorer, "Create", _entryPointName, _pageName, "STORING access token", StorylineDetails, response, "BaseDI_DataToken_MicrosoftGraph");

            //_response.send(response);

            #endregion  

            #region REPORT THE FEEDBACK

            #endregion
        }

        #endregion

        #endregion

        #endregion

        #endregion
    }
}
