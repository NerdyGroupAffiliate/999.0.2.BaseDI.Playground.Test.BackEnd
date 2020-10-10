using BaseDI.BackEnd.Script.Programming.Extensions_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Script.Web_Development.Extensions_13
{
    public class Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0
    {
        #region SERVER SIDE CODE

        public static Dictionary<string, JToken> Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(JObject storylineDetails)
        {
            if (storylineDetails == null) return null;

            #region DESCRIBE THE MEMORIES

            var serverEnvironmentMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false).SingleOrDefault();
            var serverEnvironment = serverEnvironmentMetaData != null ? serverEnvironmentMetaData.Parent : null;

            //var serverEnvironmentServerRoutesGET = serverEnvironment?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesGET;

            JToken serverEnvironmentServerRoutesGET = null; // serverEnvironment?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesGET;
            JToken serverEnvironmentServerRoutesPOST = null;
            JToken serverEnvironmentServerRoutesPUT = null;
            JToken serverEnvironmentServerRoutesDELETE = null;

            Dictionary<string, JToken> results = new Dictionary<string, JToken>();

            #endregion

            #region RECALL THE MEMORIES

            results.Add("GET", serverEnvironmentServerRoutesGET);
            results.Add("POST", serverEnvironmentServerRoutesGET);
            results.Add("PUT", serverEnvironmentServerRoutesGET);
            results.Add("DELETE", serverEnvironmentServerRoutesGET);

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
