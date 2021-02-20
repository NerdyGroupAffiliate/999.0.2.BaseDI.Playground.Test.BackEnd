export namespace BaseDI.BackEnd.Web_Development.Extensions_0 {
    export class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 {
        constructor() {

        }

        //#region GENERATE HTML STRUCTURE

        public static Step_X_X_Custom_Store_HTMLStructureToString_1_0(metaData: string, title: string, scripts: string, styles: string, body: string): string {
            let htmlHomePageTemplate = `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        {metaDataReplace}
                        <title>{titleReplace}</title>  
                        {scriptsReplace}
                        {stylesReplace}
                    </head>
                    <body>
                        {bodyReplace}
                    </body>
                </html>`

            if (scripts == "") {
                scripts = "<script src=\"/scripts/js/BaseDI_1_0.js\" type=\"text/javascript\"></script>";
            }

            htmlHomePageTemplate = htmlHomePageTemplate.replace("{metaDataReplace}", metaData);
            htmlHomePageTemplate = htmlHomePageTemplate.replace("{titleReplace}", title);
            htmlHomePageTemplate = htmlHomePageTemplate.replace("{scriptsReplace}", scripts);
            htmlHomePageTemplate = htmlHomePageTemplate.replace("{stylesReplace}", styles);
            htmlHomePageTemplate = htmlHomePageTemplate.replace("{bodyReplace}", body);

            return htmlHomePageTemplate;
        }

        //#endregion

        //#region GENERATE HTML PAGE

        private static Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(attributes) {
            //#region DESCRIBE THE MEMORIES

            var attrs = [];

            //#endregion

            //#region EXECUTE THE VISION

            for (var attribute in attributes) {
                attrs.push(`${Object.keys(attributes[attribute])[0]}="${Object.values(attributes[attribute])[0]}"`)
            }

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK

            return attrs.join(" ");

            //#endregion           
        }

        public static Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(htmlContainerJSON: any): string {
            //#region DESCRIBE THE MEMORIES

            let htmlContainerString: string = "";
            htmlContainerString = `<${htmlContainerJSON.value.HTMLContentItems[0].Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(htmlContainerJSON.value.HTMLContentItems[0].Attributes)}>{HTMLRows_Replace}</${htmlContainerJSON.value.HTMLContentItems[0].Tag}>`;

            //#endregion

            //#region EXECUTE THE VISION

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK

            return htmlContainerString;

            //#endregion            
        }

        public static Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(htmlRowsJSON: any, htmlContainerString: string): string {
            //#region DESCRIBE THE MEMORIES

            let htmlRowsString: string = "";
            let rows = [];

            //#endregion

            //#region EXECUTE THE VISION

            htmlRowsJSON.value.HTMLContentItems.forEach(row => {
                rows.push(`<${row.Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(row.Attributes)}>{${row.Attributes[0].id}_Replace}</${row.Tag}>`)
            });
            htmlRowsString = htmlContainerString.replace("{HTMLRows_Replace}", rows.join("\n"))

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK

            return htmlRowsString;

            //#endregion            
        }

        public static Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(htmlColumnsJSON: any, htmlRowsString: string): string {

            //#region DESCRIBE THE MEMORIES

            let htmlColumnsString: string = htmlRowsString;

            //#endregion

            //#region EXECUTE THE VISION
            htmlColumnsJSON.value.HTMLContentItems.forEach(col => {
                let colItem = `<${col.Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(col.Attributes)}>{${col.Attributes[0].id}_Replace}</${col.Tag}>\n`;
                htmlColumnsString = htmlColumnsString.replace(`{${col.ParentHTMLContentItemAttributeID}_Replace}`, colItem);
            });
            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK

            return htmlColumnsString;

            //#endregion          
        }

        public static Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(htmlContentJSON: any, htmlColumnsString: string): string {
            //#region DESCRIBE THE MEMORIES

            let htmlContentString: string = htmlColumnsString;
            let idsAndConstant = {}

            //#endregion

            //#region EXECUTE THE VISION

            htmlContentJSON.value.HTMLContentItems.forEach(con => {
                if (idsAndConstant[con.ParentHTMLContentItemAttributeID] == undefined) {
                    idsAndConstant[con.ParentHTMLContentItemAttributeID] = new Array();
                    idsAndConstant[con.ParentHTMLContentItemAttributeID].push(`<${con.Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(con.Attributes)}>${con.Value}</${con.Tag}>\n`);
                }
                else {
                    idsAndConstant[con.ParentHTMLContentItemAttributeID].push(`<${con.Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(con.Attributes)}>${con.Value}</${con.Tag}>\n`);
                }
            });

            Object.keys(idsAndConstant).forEach(item => {
                let content = idsAndConstant[item].join('\n')
                htmlContentString = htmlContentString.replace(`{${item}_Replace}`, content);
            });

            if (process.env.APP_ENV == "SERVER") {
                htmlContentString = htmlContentString.replace(/...999.0.3.BaseDI.QuickStart.Templates/g, '/Images');

            }

        
            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK
                     
            return htmlContentString;

            //#endregion                        
        }

        public static Step_5_0_Custom_Convert_CSSJSONToInlineStyles_1_0(htmlStylesJSON: any): string {
            //#region DESCRIBE THE MEMORIES
            let htmlInlineCSSString: string = "";
            let styleFilePathLocal = htmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFilePathLocal
            let filesArray = htmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles
            // let files = [];
            // filesArray.forEach(file => {
            //     files.push(`<link rel="stylesheet" href="${styleFilePathLocal}${file.StyleFileName}.css" />\n`)
            // });
            // htmlInlineCSSString = files.join("\n");

            let cssString = "";
            let PropertyArray = [];
            let MediaQueryArray = [];

            //#endregion

            //#region EXECUTE THE VISION

            filesArray.forEach(file => {
                file.StyleFileUseProperties.forEach(element => {
                    if (element.IsHtmlTag == "true" && element.properties.length > 0) {
                        if (element.IsMediaQuery == "true") {
                            let MediaQueryFeatures = [];
                            if (element.MediaQuery.type != "") {
                                MediaQueryFeatures.push(`only ${element.MediaQuery.type}`)
                            }
                            element.MediaQuery.features.forEach(feature => {
                                Object.keys(feature).forEach((featureA, index) => {
                                    if (Object.keys(feature)[index] == "operator") {
                                        MediaQueryFeatures.push(Object.values(feature)[index])
                                    } else {
                                        MediaQueryFeatures.push(`(${featureA}: ${Object.values(feature)[index]})`)
                                    }
                                });
                            });
                            element.properties.forEach(prop => {
                                if (prop.propertyName != "") {
                                    let values = [];
                                    if (MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`] === undefined) {
                                        MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`] = []
                                        prop.properyValues.forEach(value => {
                                            values.push(`${value};`)
                                        });
                                        MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].push({ propName: `${prop.propertyName}`, values: values })
                                    } else {
                                        prop.properyValues.forEach(value => {
                                            values.push(`${value};`)
                                        });
                                        MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].push({ propName: `${prop.propertyName}`, values: values })
                                    }
                                }
                            });

                        } else {
                            element.properties.forEach(prop => {
                                if (prop.propertyName != "") {
                                    if (PropertyArray[`${prop.propertyName}`] === undefined) {
                                        PropertyArray[`${prop.propertyName}`] = [];
                                        prop.properyValues.forEach(value => {
                                            PropertyArray[`${prop.propertyName}`].push(value + ";")
                                        });
                                    } else {
                                        prop.properyValues.forEach(value => {
                                            PropertyArray[`${prop.propertyName}`].push(value + ";")
                                        });
                                    }
                                }
                            });

                        }
                    }
                    else if (element.IsHtmlTag == "false" && element.properties.length > 0) {
                        let values = [];
                        if (element.IsMediaQuery == "true") {

                            let MediaQueryFeatures = [];

                            if (element.MediaQuery.type != "") {
                                MediaQueryFeatures.push(`only ${element.MediaQuery.type}`)
                            }
                            element.MediaQuery.features.forEach(feature => {
                                Object.keys(feature).forEach((featureA, index) => {
                                    if (Object.keys(feature)[index] == "operator") {
                                        MediaQueryFeatures.push(Object.values(feature)[index])
                                    } else {
                                        MediaQueryFeatures.push(`(${featureA}: ${Object.values(feature)[index]})`)
                                    }
                                });
                            });

                            element.properties.forEach(prop => {
                                if (prop.propertyName != "") {
                                    values.push(`${prop.propertyName} : ${prop.properyValues[0]};`)
                                }
                            });

                            if (MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`] === undefined) {
                                MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`] = []
                                MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].push({ attributeID: element.attributeID, values: values })
                            } else {
                                let updatedItem = MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].find((item) => { return item.attributeID === element.attributeID })
                                if (updatedItem != undefined) {
                                    updatedItem.values.push(...values)
                                } else {
                                    MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].push({ attributeID: element.attributeID, values: values })
                                }
                            }
                        } else {
                            element.properties.forEach(prop => {
                                if (prop.propertyName != "") {
                                    values.push(`${prop.propertyName} : ${prop.properyValues[0]};`)
                                }
                            });

                            if (PropertyArray[`${element.attributeID}`] === undefined) {
                                PropertyArray[`${element.attributeID}`] = [];
                                PropertyArray[`${element.attributeID}`].push({ attributeID: element.attributeID, values: values })
                            } else {
                                // PropertyArray[`${element.attributeID}`].push({ attributeID: element.attributeID, values: values })
                                PropertyArray[`${element.attributeID}`][0].values.push(...values)
                            }
                        }
                    }
                    else {
                        console.log("Something wrong in Json file!")
                    }
                });
            });

            Object.keys(PropertyArray).forEach((key, index) => {
                let obj = Object.values(PropertyArray)[index];
                if (obj[0].attributeID === undefined) {
                    cssString += `${key} { \n ${obj.join("\n")} \n}\n`;
                } else {

                    if (obj[0].attributeID.includes("#")) {
                        cssString += `${obj[0].attributeID} { \n ${obj[0].values.join("\n")} \n}\n`;
                    } else {
                        cssString += `#${obj[0].attributeID} { \n ${obj[0].values.join("\n")} \n}\n`;
                    }
                }
            });

            Object.keys(MediaQueryArray).forEach((key, index) => {
                let obj = Object.values(MediaQueryArray)[index];
                let innerCss = "";

                obj.forEach(element => {
                    if (element.attributeID === undefined) {
                        innerCss += `${element.propName} \n { \n ${element.values.join("\n")} \n}\n`;
                    } else {
                        if (element.attributeID.includes("#")) {
                            innerCss += `${element.attributeID} \n { \n ${element.values.join("\n")} \n}\n`;
                        } else {
                            innerCss += `#${element.attributeID} \n { \n ${element.values.join("\n")} \n}\n`;
                        }
                    }
                });
                cssString += `${key} {\n ${innerCss} \n}`;
            });

            htmlInlineCSSString = `<style>${cssString}</style>`;

            if (process.env.APP_ENV == "SERVER")
            {	            
                htmlInlineCSSString = htmlInlineCSSString.replace(/...999.0.3.BaseDI.QuickStart.Templates/g, '/Images');	                htmlInlineCSSString = htmlInlineCSSString.replace(/...999.0.3.BaseDI.QuickStart.Templates/g, '/Images');
            }	
            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region REPORT THE FEEDBACK

            return htmlInlineCSSString;

            //#endregion           
        }

        //#endregion
    }
}