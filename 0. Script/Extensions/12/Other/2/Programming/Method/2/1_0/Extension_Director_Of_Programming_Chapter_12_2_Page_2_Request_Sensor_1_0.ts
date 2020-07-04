﻿const fs = require('fs');
var path = require('path');


import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0"

export namespace BaseDI.BackEnd.Programming.Extensions_2
{
    export class Extension_Director_Of_Programming_Chapter_12_2_Page_2_Request_Sensor_1_0 {
        constructor() {

        }

        //#region STORE 
        public static Step_X_X_Custom_Store_LocalFilesToServer_1_0(storylineDetails: object): any {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES

            
            //#endregion

            //#region EXECUTE THE VISION


            var file = "C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\2. Data Movement\\ARM Templates\\12\\Other\\3\\Web Development\\Template\\1\\1_0\\State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0-P1_0.json"

            let rawdata = fs.readFileSync(file);
            let obj = JSON.parse(rawdata);
            let stylingItemFiles = obj.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value.baseDIInstructions.presentation[0].values_2[0].values_2_2[0].values_2_2_2[0]._2_2_2_4_clientInformationHTMLContentStylingDetails.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;

            stylingItemFiles.forEach(file => {
                file.StyleFileUseProperties.forEach(property => {
                    property.properties.forEach(prop => {
                        prop.properyValues.forEach(element => {
                            if(element.includes('url')) {
                                var url = element.replace( /(^.*\(|\).*$)/g, '' );
                                let filepath = path.resolve(decodeURI(url))
                                // console.log(filepath)
                                if (fs.existsSync(filepath)) {
                                    var fileDirName = path.dirname(filepath)
                                    var shortDirName = fileDirName.replace(`C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\`, '')
                                    let dest = `wwwroot/Client/Images/${shortDirName}`
        
                                    fs.mkdir(dest, { recursive: true }, (err) => {
                                        if (err) throw err;
                                        else {
                                            fs.copyFile(filepath, `${dest}/${path.basename(filepath)}`, (err) => {
                                                if (err) throw err;
                                            });
                                        }
                                    });
                                    
                                } else {
                                    console.log('File Not Found: ' + filepath)
                                }
                            }
                        });
                    });
                });
            });



            // styleFiles.forEach(file => {
            //     let rawfiledata = fs.readFileSync(file);
            //     let fileContent = rawfiledata.toString();
            //     fileContent.split(/\r?\n/).forEach(function(line){
            //         if(line.includes("url")) {
            //             var url = line.replace( /(^.*\(|\).*$)/g, '' );
            //             url = url.replace("../../../../../../../../../../","../999.0.3.BaseDI.QuickStart.Templates/3. Client/Web/")
            //             url = url.replace("../../../", "")
            //             let filepath = path.resolve(decodeURI(url))
            //             console.log(filepath)
            //             if (fs.existsSync(filepath)) {
            //                 var fileDirName = path.dirname(filepath)
            //                 var shortDirName = fileDirName.replace(`C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\`, '')
            //                 let dest = `wwwroot/Client/Images/${shortDirName}`

            //                 fs.mkdir(dest, { recursive: true }, (err) => {
            //                     if (err) throw err;
            //                     else {
            //                         fs.copyFile(filepath, `${dest}/${path.basename(filepath)}`, (err) => {
            //                             if (err) throw err;
            //                         });
            //                     }
            //                 });
                            
            //             } else {
            //                 console.log('File Not Found: ' + filepath)
            //             }
            //         }
            //       })
            // });

            var a = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment", false);
            
            var SetupItemEnvironmentServerMetaDataPaths = a.value.SetupItemEnvironmentServer.SetupItemEnvironmentServerMetaDataPaths;

            SetupItemEnvironmentServerMetaDataPaths.forEach(metaDataPaths => {
                let rawdata = fs.readFileSync(metaDataPaths.MetaDataLocalPath);
                let obj = JSON.parse(rawdata);
                let  contentItems = obj.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value.baseDIInstructions.presentation[0].values_2[0].values_2_2[0].values_2_2_2[0]._2_2_2_3_clientInformationHTMLContentDetails.value[0];
               
                // console.log(contentItems)
                Object.keys(contentItems).forEach(function(key) {
                    var val = contentItems[key];
                    let HTMLContentItems = val.value.HTMLContentItems;
                    HTMLContentItems.forEach(item => {
                        var attributes = item.Attributes;
                        attributes.forEach(att => {
                            if(att.src != undefined) {
                                // console.log(att.src)
                                let filepath = path.resolve(decodeURI(att.src))
                               if (fs.existsSync(filepath)) {
                                    var fileDirName = path.dirname(filepath)
                                    var shortDirName = fileDirName.replace(`C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\`, '')
                                    let dest = `wwwroot/Client/Images/${shortDirName}`

                                    fs.mkdir(dest, { recursive: true }, (err) => {
                                        if (err) throw err;
                                        else {
                                            fs.copyFile(filepath, `${dest}/${path.basename(filepath)}`, (err) => {
                                                if (err) throw err;
                                            });
                                        }
                                    });
                                    
                                } else {
                                    console.log('File Not Found: ' + filepath)
                                }
                            }
                        });
                    });
                  });
                // contentItems.forEach(contentItem => {
                //     console.log(contentItem)
                // });
            });
            

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }
        //#endregion
    }
}