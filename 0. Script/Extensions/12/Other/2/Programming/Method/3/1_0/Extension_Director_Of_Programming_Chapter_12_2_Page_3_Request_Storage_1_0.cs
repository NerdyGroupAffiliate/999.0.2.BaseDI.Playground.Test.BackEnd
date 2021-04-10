using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseDI.Professional.Script.Programming.Extensions_3
{
    public class Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0
    {
        public static void Step_X_X_Custom_Store_ServerLocalDataToMemory_1_0(string storageAction, string storageKey, object storageValue)
        {
            #region VARIABLES

            #endregion

            #region VALUES

            #endregion

            #region INPUTS

            #endregion

            #region OUTPUT

            #endregion
        }

        public static JObject Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_1(JObject storylineDetails)
        {
            if (storylineDetails == null) return null;

            #region VARIABLES

            var serverEnvironmentMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false).SingleOrDefault();
            var serverEnvironment = serverEnvironmentMetaData != null ? serverEnvironmentMetaData.Parent : null;

            Dictionary<string, JToken> results = new Dictionary<string, JToken>();

            #endregion

            #region VALUES

            #endregion

            #region INPUTS

            #endregion

            #region OUTPUT

            return storylineDetails;

            #endregion            
        }

        public static Task<JObject> Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(aClass_Programming_ScriptAction_12_2_1_0<JObject> masterLeader_masterStoreReference, string CRUDVerb, string entryPointName, string pageName, string description, JObject storylineDetails, Object data, string uniqueReferenceKey = "") 
        {
            return null;
        }
    }
}
