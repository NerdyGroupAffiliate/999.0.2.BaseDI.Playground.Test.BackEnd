using BaseDI.BackEnd.Script.Programming.Extensions_1;

using CurlThin;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace BaseDI.BackEnd.Script.Web_Development.Extensions_13
{
    public class Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0
    {
        #region SERVER SIDE CODE

        #region SERVER API REQUEST

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

        #endregion

        #region SERVER ASSET MANAGEMENT

        public static async void Step_X_X_Custom_Store_LocalFilesToServer_1_0(JObject storylineDetails)
        {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            //#region EXECUTE THE VISION

            List<JToken> list = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0
               .Step_X_X_Read_And_FindJSONNode_2_0(storylineDetails, "searchkey",
                   "SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment", false);

            var parent = list.Count > 0 ? list[1].Parent.Parent : list[0].Parent.Parent;


            JArray SetupItemEnvironmentServerMetaDataPaths =
                (JArray)parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemEnvironmentServerMetaDataPaths");

            foreach (var metaDataPath in SetupItemEnvironmentServerMetaDataPaths)
            {

                dynamic obj =
                     JObject.Parse(await File.ReadAllTextAsync(metaDataPath.SelectToken("MetaDataLocalPath")?.ToString()));

                var contentItems = obj.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value.baseDIInstructions
                    .presentation[0].values_2[0].values_2_2[0].values_2_2_2[0]
                    ._2_2_2_3_clientInformationHTMLContentDetails.value[0];
                var stylingItemFiles = obj.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value
                    .baseDIInstructions.presentation[0].values_2[0].values_2_2[0].values_2_2_2[0]
                    ._2_2_2_4_clientInformationHTMLContentStylingDetails.value[0]
                    ._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;
                var currentDir = Environment.CurrentDirectory;

                foreach (var file in stylingItemFiles)
                {
                    foreach (var property in file.StyleFileUseProperties)
                    {
                        foreach (var prop in property.properties)
                        {
                            foreach (string element in prop.properyValues)
                            {
                                if (element.Contains("url"))
                                {
                                    var url = Regex.Replace(element, @"(^.*\(|\).*$)", "");
                                    var filepath =
                                        Path.GetFullPath(Path.Combine(currentDir, HttpUtility.UrlDecode(url)));
                                    if (File.Exists(filepath))
                                    {
                                        var fileDirName = Path.GetDirectoryName(filepath);
                                        var shortDirName =
                                            fileDirName.Replace(
                                                "C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\", "");
                                        var dest = $"wwwroot/Client/Images/{shortDirName}";

                                        if (!Directory.Exists(dest))
                                            Directory.CreateDirectory(dest);
                                        File.Copy(filepath, $"{dest}/{Path.GetFileName(filepath)}", true);
                                    }
                                    else
                                    {
                                        Console.WriteLine($"File Not Found:  {filepath}");
                                    }
                                }

                            }
                        }
                    }

                    foreach (var x in contentItems)
                    {
                        var key = ((JProperty)(x)).Name;
                        var jvalue = ((JProperty)(x)).Value;

                        var val = contentItems[key];
                        var HTMLContentItems = val.value.HTMLContentItems;

                        foreach (var item in HTMLContentItems)
                        {
                            var attributes = item.Attributes;

                            foreach (var att in attributes)
                            {
                                if (att.src != null)
                                {
                                    try
                                    {
                                        var src = Regex.Replace(HttpUtility.UrlDecode(att.src.Value), @"(^.*\(|\).*$)", "");

                                        var filepath =
                                            Path.GetFullPath(Path.Combine(currentDir, src));

                                        if (File.Exists(filepath))
                                        {
                                            var fileDirName = Path.GetDirectoryName(filepath);
                                            var shortDirName =
                                                fileDirName.Replace(
                                                    "C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\", "");
                                            var dest = $"wwwroot/Client/Images/{shortDirName}";

                                            if (!Directory.Exists(dest))
                                                Directory.CreateDirectory(dest);
                                            File.Copy(filepath, $"{dest}/{Path.GetFileName(filepath)}", true);
                                        }
                                        else
                                        {
                                            Console.WriteLine($"File Not Found:  {filepath}");
                                        }
                                    }
                                    catch (Exception e)
                                    {
                                        Console.WriteLine(e);
                                        // throw;
                                    }


                                }
                            }
                        }

                    }
                }


                //#endregion

                //#region REPORT THE FEEDBACK

                //#endregion
            }

            //#endregion

        }

        #endregion

        #region SERVER CONFIGURATION

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

        #region SERVER LOCAL STORAGE

        public static void Step_X_X_Custom_Store_ServerLocalDataToMemory_1_0(string storageAction, string storageKey, object storageValue)
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
        
        #endregion

        #endregion
    }
}
