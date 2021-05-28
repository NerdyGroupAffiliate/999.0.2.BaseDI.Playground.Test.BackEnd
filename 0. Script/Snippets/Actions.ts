//#region Imports

//#region 3rd Party

var importedNodeJSFileManager = require('fs');
var importedNodeJSFilePath = require('path');

//#endregion

//#region BaseDI

import * as Interface_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0 from "../Interfaces/12/Other/3/Web Development/Contract/0/1_0/Interface_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Snippets {
    export class Actions {
        //#region 1. Assign

        //#endregion

        //#region 2. Ready

        constructor() {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx

            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region HANDLE xxx xxx

            //#region EDGE CASE - USE xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE xxx xxx


            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region 3. Set

        //#endregion

        //#region 4. Action

        //#region SOLUTION 1-0 - FILE MANAGER EXAMPLE #1

        //EXAMPLE 1: HOW TO CONVERT (FILTER) JSON TO A GENERIC LIST OF FILE NAMES
        //EXAMPLE 2: HOW TO TRANSPORT (COPY) FILES FROM PLACE TO ANOTHER

        public async Action_1_0(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestFileMetaDataItemOfContent: string = "";
            let storedProcessRequestFileMetaDataItemOfContentHtml: any = null;
            let storedProcessRequestFileMetaDataItemOfContentStyles: Array<object> = null;
            let storedProcessRequestFileMetaDataList: Array<string> = [];
            let storedProcessRequestFileMetaDataListOfContent: any = [];
            let storedProcessRequestFileMetaDataListOfContentHtml: any = null;
            let storedProcessRequestFileMetaDataListOfContentStyles: any = null;

            let storedProcessRequestFileCopyFrom: string = "";
            let storedProcessRequestFileCopyTo: string = "";

            let storedProcessRequestFileMediaList: Array<string> = [];

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input example json

            let storedInputRequestExampleJSON: Interface_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.IWebDevelopment_12_3.HtmlSection =
            {
                searchkey: "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent",
                type: "object",
                value: {
                    HTMLContentItemRowID: "4",
                    HTMLContentItems: [{
                        Notes: "Background Wallpaper Image of Theme",
                        Tag: "img",
                        Attributes: [{
                            id: "container_Setting-Ecommerce-Nutrition-Floor-SellLowTickerOffer-AJC-Home-4_2_1_0"
                        },
                        {
                            alt: "Ageless Background Wallpaper - Home"
                        },
                        {
                            src: "{RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg"
                        }],
                        Value: "",
                        Events: [],
                        ParentHTMLContentItemAttributeID: "",
                        ChildHTMLContentDetails: [],
                        ChildHTMLContentFlowDirection: "vertical"
                    }]
                }
            }



            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process file details

            let storedProcessRequestFileRootPath: string = "C://Programming//999.0.3.BaseDI.QuickStart.Templates";
            let storedProcessRequestFileRootPathCopyTo: string = "C://Programming//999.0.2.BaseDI.Playground.Test.BackEnd";

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx

            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region HANDLE xxx xxx

            //#region IDEA CASE - USE baseDi solution

            try
            {
                //#region 1. PARSE (CONVERT) file paths from html files (images, videos, etc)

                try
                {
                    const ExecuteConversionRequest = async (): Promise<any> => {
                        //OUTPUT EXAMPLE: "HTMLContentItems": [{}]
                        storedProcessRequestFileMetaDataItemOfContentHtml = storedInputRequestExampleJSON.value.HTMLContentItems;
                        if (storedProcessRequestFileMetaDataItemOfContentHtml != null && storedProcessRequestFileMetaDataItemOfContentHtml != undefined) {
                            storedProcessRequestFileMetaDataItemOfContentHtml.map(storedProcessRequestFileMetaDataItemOfContentHtmlAttributes => {
                                //OUTPUT EXAMPLE: "HTMLContentItems": [{"Attributes":[{}]}]
                                storedProcessRequestFileMetaDataItemOfContentHtmlAttributes?.Attributes.map(storedProcessRequestFileMetaDataItemOfContentHtmlAttribute => {
                                    //OUTPUT EXAMPLE: "HTMLContentItems": [{"Attributes":[{ "src":"{RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg"}]}]
                                    if (storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src != null && storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src != undefined) {

                                        //OUTPUT EXAMPLE: {RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                                        storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src = storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src.replace(/(^.*\(|\).*$)/g, '');

                                        //OUTPUT EXAMPLE: C:/Programming/999.0.3.BaseDI.QuickStart.Templates/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                                        storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src = storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src.replace("{RootPath}", storedProcessRequestFileRootPath);

                                        //OUTPUT EXAMPLE: C:\Programming\999.0.3.BaseDI.QuickStart.Templates\3. Client\Web\4. Experience\5\Sight\1\Generate Brand Awareness\1\Advertising\Assets\1\1_0\Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                                        //storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src = importedNodeJSFilePath.resolve(decodeURI(storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src));

                                        storedProcessRequestFileMediaList.push(storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src);
                                    }
                                })
                            })
                        }
                        else {
                            throw new Error("converting file list from html files");
                        }
                    };

                    storedProcessRequestFileMediaList = await ExecuteConversionRequest();
                    
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting file list from html files")
                }

                //#endregion      

                //#region 2. COPY (TRANSPORT) media files to specified directory
                try
                {
                    const ExecuteTransportRequest = async (): Promise<any> => {
                        storedProcessRequestFileMediaList.map(storedProcessRequestFileMediaItem => {
                            //OUTPUT EXAMPLE: C:/Programming/999.0.3.BaseDI.QuickStart.Templates/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                            storedProcessRequestFileCopyFrom = storedProcessRequestFileMediaItem;

                            //OUTPUT EXAMPLE: C:/Programming/999.0.2.BaseDI.Playground.Test.BackEnd/wwwroot/client/images/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                            storedProcessRequestFileCopyTo = storedProcessRequestFileMediaItem.replace(storedProcessRequestFileRootPath, storedProcessRequestFileRootPathCopyTo + "//wwwroot//Client//Images//");

                            if (importedNodeJSFileManager.existsSync(importedNodeJSFilePath.resolve(decodeURI(storedProcessRequestFileCopyFrom)))) {
                                if (!importedNodeJSFileManager.existsSync(importedNodeJSFilePath.dirname(storedProcessRequestFileCopyTo))) {
                                    try {
                                        importedNodeJSFileManager.mkdirSync(importedNodeJSFilePath.dirname(decodeURI(storedProcessRequestFileCopyTo)), { recursive: true });
                                    }
                                    catch (storedProcessRequestMistake) {
                                        throw new Error("canoot create directory " + importedNodeJSFilePath.dirname(storedProcessRequestFileCopyTo));
                                    }
                                }

                                try {
                                    storedProcessRequestFileCopyFrom = importedNodeJSFilePath.resolve(decodeURI(storedProcessRequestFileCopyFrom));
                                    storedProcessRequestFileCopyTo = importedNodeJSFilePath.resolve(decodeURI(storedProcessRequestFileCopyTo));

                                    importedNodeJSFileManager.copyFile(storedProcessRequestFileCopyFrom, storedProcessRequestFileCopyTo, (storedProcessRequestMistake) => { throw storedProcessRequestMistake });
                                }
                                catch (storedProcessRequestMistake) {
                                    throw new Error("canoot copy file " + storedProcessRequestFileCopyFrom);
                                }
                            }
                        })
                    }

                    await Promise.resolve(ExecuteTransportRequest());
                }
                catch (storedProcessRequestMistake) {
                    if (!storedProcessRequestMistake.message) {
                        throw new Error("transporting media files");
                    }

                    throw storedProcessRequestMistake;
                }
                //#endregion
            }
            catch (storedProcessRequestMistake) {
                if (!storedProcessRequestMistake.message) {
                    throw new Error("converting json to array of files");
                }

                throw storedProcessRequestMistake;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE xxx xxx


            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#endregion
    }
}