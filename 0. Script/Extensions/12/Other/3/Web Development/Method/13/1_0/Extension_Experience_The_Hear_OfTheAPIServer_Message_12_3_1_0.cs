using BaseDI.BackEnd.Script.Programming.Extensions_1;

using CurlThin;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Script.Web_Development.Extensions_13
{
    public class Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0
    {
        #region SERVER SIDE CODE

        public static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_0(object server, string url, string verbName, Object options, Func<Object> callback)
        {
            if (server == null) return null;
            if (verbName == null || verbName == "") return null;

            switch (verbName.ToUpper())
            {
                case "DELETE":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_DELETE(server, url, options, callback);
                case "GET":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_GET(server, url, options, callback);
                case "HEAD":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_HEAD(server, url, options, callback);
                case "POST":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_POST(server, url, options, callback);
                case "PUT":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_PUT(server, url, options, callback);
                default:
                    return null;
            }
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_DELETE(object server, string url, Object options, Func<Object> callback)
        {
            return null;
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_GET(object server, string url, Object options, Func<Object> callback)
        {
            return null;
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_HEAD(object server, string url, Object options, Func<Object> callback)
        {
            return null;
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_POST(object server, string url, Object options, Func<Object> callback)
        {
            return null;
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_PUT(object server, string url, Object options, Func<Object> callback)
        {
            return null;
        }

        public static Dictionary<string, JToken> Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(JObject storylineDetails)
        {
            if (storylineDetails == null) return null;

            #region DESCRIBE THE MEMORIES

            var serverEnvironmentMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false).SingleOrDefault();

            var serverEnvironment = serverEnvironmentMetaData != null ? serverEnvironmentMetaData.Parent : null;

           // Console.WriteLine(serverEnvironmentMetaData.Parent.Parent);

            //Console.WriteLine(serverEnvironment.Parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemTransportItemRoutesGET"));
            //var serverEnvironmentServerRoutesGET = serverEnvironment?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesGET;

            JToken serverEnvironmentServerRoutesGET = serverEnvironment.Parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemTransportItemRoutesGET"); // serverEnvironment?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesGET;
            JToken serverEnvironmentServerRoutesPOST = serverEnvironment.Parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemTransportItemRoutesPOST"); 
            JToken serverEnvironmentServerRoutesPUT = serverEnvironment.Parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemTransportItemRoutesPUT"); 
            JToken serverEnvironmentServerRoutesDELETE = serverEnvironment.Parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemTransportItemRoutesDELETE"); 

            Dictionary<string, JToken> results = new Dictionary<string, JToken>();

            #endregion

            #region RECALL THE MEMORIES

            results.Add("GET", serverEnvironmentServerRoutesGET);
            results.Add("POST", serverEnvironmentServerRoutesPOST);
            results.Add("PUT", serverEnvironmentServerRoutesPUT);
            results.Add("DELETE", serverEnvironmentServerRoutesDELETE);

            #endregion

            #region EXECUTE THE VISION

            #endregion

            return results;
        }

        public static JObject Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_1(JObject storylineDetails)
        {
            if (storylineDetails == null) return null;

            #region DESCRIBE THE MEMORIES

            var serverEnvironmentMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false).SingleOrDefault();
            var serverEnvironment = serverEnvironmentMetaData != null ? serverEnvironmentMetaData.Parent : null;

            Dictionary<string, JToken> results = new Dictionary<string, JToken>();

            #endregion

            #region RECALL THE MEMORIES

            #endregion

            #region EXECUTE THE VISION

            #endregion

            #region REPORT THE FEEDBACK

            return storylineDetails;

            #endregion            
        }
        #endregion
    }
}
