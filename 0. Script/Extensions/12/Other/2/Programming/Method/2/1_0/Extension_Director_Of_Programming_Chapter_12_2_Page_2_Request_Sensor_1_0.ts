const objectScan = require('copyfiles');
const fs = require('fs');
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
            if (process.env.APP_ENV == "SERVER") {
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
            }
            

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }
        //#endregion
    }
}