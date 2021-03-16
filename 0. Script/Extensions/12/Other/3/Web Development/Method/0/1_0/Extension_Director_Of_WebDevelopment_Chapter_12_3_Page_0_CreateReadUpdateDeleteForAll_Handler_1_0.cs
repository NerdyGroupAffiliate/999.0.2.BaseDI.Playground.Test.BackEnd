using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Html;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace BaseDI.Script.Web_Development.Extensions_0
{
    public class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0
    {
        public static string Step_X_X_Custom_Store_HTMLStructureToString_1_0(string metaData, string title,
            string scripts, string styles, string body)
        {
            var htmlHomePageTemplate = @"<!DOCTYPE html>
                <html lang='en'>
                <head>
                    {metaDataReplace}
                    <title>{titleReplace}</title>
                    {scriptsReplace}
                    {stylesReplace}
                </head>
                <body>
                    {bodyReplace}
                </body>
                </ html>";

            htmlHomePageTemplate = htmlHomePageTemplate.Replace("{metaDataReplace}", metaData);
            htmlHomePageTemplate = htmlHomePageTemplate.Replace("{titleReplace}", title);
            htmlHomePageTemplate = htmlHomePageTemplate.Replace("{scriptsReplace}", scripts);
            htmlHomePageTemplate = htmlHomePageTemplate.Replace("{stylesReplace}", styles);
            htmlHomePageTemplate = htmlHomePageTemplate.Replace("{bodyReplace}", body);

            return htmlHomePageTemplate;
        }

        //#endregion

        //#region GENERATE HTML PAGE

        private static dynamic Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(dynamic attributes)
        {
            //#region DESCRIBE THE MEMORIES

            var attrs = new List<string>();

            //#endregion

            //#region EXECUTE THE VISION

            foreach (var attribute in attributes)
            {
               
                Dictionary<string, string> dictObj = attribute.ToObject<Dictionary<string, string>>();

                foreach (var attributeKeyValue in dictObj)
                {
                    attrs.Add($"{attributeKeyValue.Key}='{attributeKeyValue.Value}'");
                }



            }

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK

            return string.Join(" ", attrs);

            //#endregion           
        }

        public static string Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(dynamic htmlContainerJSON)
        {
            //#region DESCRIBE THE MEMORIES
            
            string htmlContainerString = $@"<{htmlContainerJSON.value.HTMLContentItems[0].Tag
                } {Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(htmlContainerJSON.value.HTMLContentItems[0].Attributes)}>{{HTMLRows_Replace}}</{htmlContainerJSON.value.HTMLContentItems[0].Tag}>";

            //#endregion

            //#region EXECUTE THE VISION

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK
            return htmlContainerString;

            //#endregion            
        }

        public static string Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(dynamic htmlRowsJSON,
            string htmlContainerString)
        {
            //#region DESCRIBE THE MEMORIES

            string htmlRowsString = "";
            var rows = new List<string>();

            //#endregion

            //#region EXECUTE THE VISION
            foreach (var row in htmlRowsJSON.value.HTMLContentItems)
            {
                rows.Add($@"<{
                        row.Tag
                    } {Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(row.Attributes)}>{{{
                        row.Attributes[0].id
                    }_Replace}}</{row.Tag}>");
            }

            htmlRowsString = htmlContainerString.Replace("{HTMLRows_Replace}", string.Join("\n", rows));

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK
            return htmlRowsString;

            //#endregion            
        }

        public static string Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(dynamic htmlColumnsJSON,
            string htmlRowsString)
        {

            //#region DESCRIBE THE MEMORIES

            string htmlColumnsString = htmlRowsString;

            //#endregion

            //#region EXECUTE THE VISION
            foreach (var col in htmlColumnsJSON.value.HTMLContentItems)
            {
                var colItem = $@"<{
                        col.Tag
                    } {Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(col.Attributes)}>{{{col.Attributes[0].id}_Replace}}</{col.Tag}>\n";
                htmlColumnsString = htmlColumnsString.Replace($@"{{{col.ParentHTMLContentItemAttributeID}_Replace}}", colItem);

            }
            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK
            return htmlColumnsString;

            //#endregion          
        }

        public static string Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(dynamic htmlContentJSON,
            string htmlColumnsString)
        {
            //#region DESCRIBE THE MEMORIES

            string htmlContentString = htmlColumnsString;
            var idsAndConstant = new Dictionary<string, dynamic>();

            //#endregion

            //#region EXECUTE THE VISION

            foreach (var con in htmlContentJSON.value.HTMLContentItems)
            {
                string parentHTMLContentItemAttributeID = con.ParentHTMLContentItemAttributeID;


                if (!idsAndConstant.ContainsKey(parentHTMLContentItemAttributeID))
                {
                    idsAndConstant.Add(parentHTMLContentItemAttributeID, new List<string>());

                   idsAndConstant[parentHTMLContentItemAttributeID].Add(
                    $@"<{con.Tag} {Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(con.Attributes)}>{
                            con.Value
                        }</{con.Tag}>\n");
                }
                else
                {
                    idsAndConstant[parentHTMLContentItemAttributeID].Add(
                        $@"<{con.Tag} {Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(con.Attributes)}>{con.Value}</{con.Tag}>\n");
                }
            }

            foreach (var item in idsAndConstant.Keys)
            {

                string content = string.Join("\n", idsAndConstant[item]); ;

                htmlContentString = htmlContentString.Replace($"{{{item}_Replace}}", content);
            }

            htmlContentString = htmlContentString.Replace("../999.0.3.BaseDI.QuickStart.Templates", "/StaticFiles");


            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK

            return htmlContentString;

            //#endregion                        
        }

        public static string Step_5_0_Custom_Convert_CSSJSONToInlineStyles_1_0(dynamic htmlStylesJSON)
        {
            //#region DESCRIBE THE MEMORIES
            string htmlInlineCSSString = "";
            string styleFilePathLocal = htmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value
                .HTMLContentStylingItemFiles[0].StyleFilePathLocal;
            var filesArray = htmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value
                .HTMLContentStylingItemFiles[0].StyleFiles;
            // let files = [];
            // filesArray.forEach(file => {
            //     files.push(`<link rel="stylesheet" href="${styleFilePathLocal}${file.StyleFileName}.css" />\n`)
            // });
            // htmlInlineCSSString = files.join("\n");
            

            string cssString = "";
            var PropertyArray = new Dictionary<string, List<dynamic>>();
            var MediaQueryArray = new Dictionary<string, List<dynamic>>();

            //#endregion
           
            //#region EXECUTE THE VISION
            foreach (var file in filesArray)
            {
              foreach (var element in file.StyleFileUseProperties)
              {
                  if ((string) element.IsHtmlTag == "true" && element.properties.Count > 0)
                  {
                        if (element.IsMediaQuery == "true")
                        {
                            var MediaQueryFeatures = new List<string>();

                            if (element.MediaQuery.type != "")
                            {
                                MediaQueryFeatures.Add($"only {element.MediaQuery.type}");
                            }


                            foreach (var feature in element.MediaQuery.features)
                            {
                                foreach (var kv in JsonConvert.DeserializeObject<Dictionary<string, string>>(feature.ToString()))
                                {
                                    MediaQueryFeatures.Add(kv.Key == "operator"
                                        ? (string) kv.Value
                                        : $"({kv.Key}: {kv.Value})");
                                }
                            }
                            
                            foreach (var prop in element.properties)
                            {
                                if (prop.propertyName != "")
                                {
                                    var values = new JArray();
                                    if (!MediaQueryArray.ContainsKey($"@media {string.Join(" ", MediaQueryFeatures)}"))
                                    {
                                        MediaQueryArray.Add($"@media {string.Join(" ", MediaQueryFeatures)}", new List<dynamic>());
                                        foreach (var value in prop.properyValues)
                                        {
                                            values.Add($"{value};");
                                        }
                                       
                                        MediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"].Add(new JObject
                                        {
                                            {"propName", $"{prop.propertyName}"},
                                            {"values", values}
                                        });
                                    }
                                    else
                                    {
                                        foreach (var value in prop.properyValues)
                                        {
                                            values.Add($"{value};");
                                        }

                                        MediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"]
                                            .Add(new JObject
                                            {
                                                {"propName", prop.propertyName},
                                                {"values", values}
                                            });
                                    }
                                }
                            }
                        }
                        else
                        {
                            foreach (var prop in element.properties)
                            {
                                if (prop.propertyName != "")
                                {
                                    if (!PropertyArray.ContainsKey($"{prop.propertyName}"))
                                    {
                                        PropertyArray.Add($"{prop.propertyName}", new List<dynamic>());
                                        foreach (var value in prop.properyValues)
                                        {
                                            PropertyArray[$"{prop.propertyName}"].Add($"{value};");
                                        }
                                    }
                                    else
                                    {
                                        foreach (var value in prop.properyValues)
                                        {
                                            PropertyArray[$"{prop.propertyName}"].Add($"{value};");
                                        }
                                    }
                                }
                            }

                        }
                  }
                  else if (element.IsHtmlTag == "false" && element.properties.Count > 0)
                  {
                        var values = new JArray();
                        if (element.IsMediaQuery == "true")
                        {
                            var MediaQueryFeatures = new List<string>();

                            if (element.MediaQuery.type != "")
                            {
                                MediaQueryFeatures.Add($"only {element.MediaQuery.type}");
                            }

                            foreach (var feature in element.MediaQuery.features)
                            {
                               
                                foreach (var kv in JsonConvert.DeserializeObject<Dictionary<string, string>>(feature.ToString()))
                                {
                                    MediaQueryFeatures.Add(kv.Key == "operator"
                                        ? (string)kv.Value
                                        : $"({kv.Key}: {kv.Value})");

                                }
                            }

                            foreach (var prop in element.properties)
                            {
                                if (prop.propertyName != "")
                                {
                                    values.Add($"{prop.propertyName} : {prop.properyValues[0]};");
                                }
                            }

                            if (!MediaQueryArray.ContainsKey($"@media {string.Join(" ", MediaQueryFeatures)}"))
                            {
                                MediaQueryArray.Add($"@media {string.Join(" ", MediaQueryFeatures)}",
                                    new List<dynamic>());

                                MediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"]
                                    .Add(new JObject
                                    {
                                        {"attributeID", element.attributeID},
                                        {"values", values}
                                    });
                            }
                            else
                            {
                                MediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"].Add(new JObject
                                    {
                                        {"attributeID", element.attributeID },
                                        {"values", values}
                                    });


                            }
                        }
                        else
                        {
                            foreach (var prop in element.properties)
                            {
                                if (prop.propertyName != "")
                                {
                                    values.Add($"{prop.propertyName} : {prop.properyValues[0]};");
                                }
                            }
                           
                            if (!PropertyArray.ContainsKey($"{element.attributeID}")) {
                                PropertyArray.Add($"{element.attributeID}", new List<dynamic>());
                                PropertyArray[$"{element.attributeID}"].Add(new JObject
                                {
                                    {"attributeID", element.attributeID },
                                    {"values", values}
                                });
                            } else
                            {
                                foreach (var value in values)
                                {
                                    PropertyArray[$"{element.attributeID}"].FirstOrDefault().values.Add(value);
                                } 
                            }
                        }
                  }
                  else
                  {
                        Console.WriteLine("element.IsHtmlTag Missing!");
                  }
              }
            }

            foreach (var key in PropertyArray.Keys)
            {
                var obj = PropertyArray[key];

                if (obj.FirstOrDefault() is string)
                {
                    cssString += $@"{ key }
                    {{ \n { string.Join(" ", obj.ToArray())} \n}}\n";
                }
                else
                {

                    if (obj.Any())
                    {
                        string attributeID = obj.FirstOrDefault().attributeID;


                        if (attributeID.Contains("#"))
                        {
                            cssString += @$"{ obj[0].attributeID}
                                {{ \n { string.Join("", obj.FirstOrDefault().values)} \n}}\n";
                        }
                        else
                        {
                            cssString += $"#{obj.FirstOrDefault().attributeID} {{ \n {string.Join("", obj.FirstOrDefault().values)} \n}}\n";
                        }
                    }
                    
                }
            }
          
            foreach (var key in MediaQueryArray.Keys)
            {
                var obj = MediaQueryArray[key];
                var innerCss = "";

                if (obj != null)
                {
                    foreach (var element in obj)
                    {
                        string attributeID = element.attributeID;
                        if (attributeID == null)
                        {
                            innerCss += $"{element.propName} \n {{ \n {string.Join(" ", element.values)} \n}}\n";
                        }
                        else
                        {
                            if (attributeID.Contains("#"))
                            {
                                innerCss += $"{ element.attributeID} \n {{ \n {string.Join(" ", element.values)} \n}}\n";
                            }
                            else
                            {
                                innerCss += $"#{element.attributeID} \n {{ \n {string.Join(" ", element.values)} \n}}\n";
                            }
                        }
                        //Console.WriteLine(element.values);
                    }
                }
                
                cssString += $@"{ key}
                {{\n { innerCss} \n}}";
            }

           
            htmlInlineCSSString = $"<style>{ cssString }</style>";

             htmlInlineCSSString = htmlInlineCSSString.Replace("../999.0.3.BaseDI.QuickStart.Templates", "/StaticFiles");
            htmlInlineCSSString = Regex.Unescape(htmlInlineCSSString);
            return htmlInlineCSSString;
        }
    }
}
