using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Html;
using Newtonsoft.Json.Linq;

namespace BaseDI.BackEnd.Script.Web_Development.Extensions_0
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

            htmlContentString = htmlContentString.Replace("..999.0.3.BaseDI.QuickStart.Templates", "/Images");


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
            var PropertyArray = new Dictionary<string, string>();
            var MediaQueryArray = new Dictionary<string, List<object>>();

            //#endregion

            //#region EXECUTE THE VISION
            foreach (var file in filesArray)
            {
                foreach (var element in file.StyleFileUseProperties)
                {
                    if (element.IsHtmlTag == "true" && element.properties.length > 0)
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
                                var index = 0;
                                foreach (var featureA in feature)
                                {
                                    //TODO keys and values
                                    if (feature[index] == "operator")
                                    {
                                        MediaQueryFeatures.Add(feature[index]);
                                    }
                                    else
                                    {
                                        MediaQueryFeatures.Add($"({featureA}: {feature[index]})");
                                    }

                                    index++;
                                }
                            }

                            foreach (var prop in element.properties)
                            {
                                if (prop.propertyName != "")
                                {
                                    var values = new List<string>();
                                    if (MediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"] == null)
                                    {

                                        MediaQueryArray.Add($"@media {string.Join(" ", MediaQueryFeatures)}", null);
                                        foreach (var value in prop.properyValues)
                                        {
                                            values.Add($"{value};");
                                        }

                                        MediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"]
                                            .Add(new JObject {"propName", $"{prop.propertyName}", "values", values});
                                    }
                                    else
                                    {
                                        foreach (var value in prop.properyValues)
                                        {
                                            values.Add($"{value};");
                                        }

                                        MediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"]
                                            .Add(new JObject {"propName", $"{prop.propertyName}", "values", values});
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
                                    if (PropertyArray[$"{prop.propertyName}"] == null)
                                    {
                                        PropertyArray.Add($"{prop.propertyName}", null);
                                        foreach (var value in prop.properyValues)
                                        {
                                            PropertyArray.Add($"{prop.propertyName}", ";");
                                        }

                                    }
                                    else
                                    {
                                        foreach (var value in prop.properyValues)
                                        {
                                            PropertyArray.Add($"{prop.propertyName}", ";");
                                        }
                                    }
                                }
                            }

                        }
                    }
                    else if (element.IsMediaQuery == "false")
                    {
                        var values = new List<string>();
                        if (element.IsMediaQuery == "true")
                        {
                            var MediaQueryFeatures = new List<string>();

                            if (element.MediaQuery.type != "")
                            {
                                MediaQueryFeatures.Add($"only {element.MediaQuery.type}");
                            }

                            foreach (var feature in element.MediaQuery.features)
                            {
                                var index = 0;
                            }

                        }
                    }
                }
            }

            return htmlInlineCSSString;
        }
    }
}
