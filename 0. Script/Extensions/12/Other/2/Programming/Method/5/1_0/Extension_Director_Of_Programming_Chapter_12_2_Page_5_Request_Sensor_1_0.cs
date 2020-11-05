using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using BaseDI.BackEnd.Script.Programming.Extensions_1;

namespace BaseDI.BackEnd.Script.Programming.Extensions_5
{
    public class Extension_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0
    {
        //#region STORE

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
                        var key = ((JProperty) (x)).Name;
                        var jvalue = ((JProperty) (x)).Value;

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
                                        var filepath =
                                            Path.GetFullPath(Path.Combine(currentDir, att.src));

                                        if (File.Exists(att.src))
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
    }
}