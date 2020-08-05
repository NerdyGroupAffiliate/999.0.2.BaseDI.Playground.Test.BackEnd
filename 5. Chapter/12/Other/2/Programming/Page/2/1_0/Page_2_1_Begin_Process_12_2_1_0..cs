using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Repository_1;
using BaseDI.BackEnd.Script.Programming_1;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Chapter.Page.Programming_2
{
    public class Page_2_1_Begin_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_2_1_Begin_Process_12_2_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.
            StorylineDetails = storylineDetails;
            Repository = repository;

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state

        #endregion

        #region 4. Action
       

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            Repository.ExtraData = ExtraData;
            Repository.MasterStorer = MasterStorer;

            //CREATE THE PROCESS
            Func<bool> processMetaData = null;

            processMetaData = () =>
            {
                //EXECUTE THE PROCESS
                var metaData = Repository.Action_9_Verify_Process().Result;

                //STORE META DATA
                //StorylineDetails = metaData.StorylineDetails;
                //StorylineDetails_Parameters = metaData.StorylineDetails_Parameters;

                //STORE JSONSTRING PLACEHOLDER
                //Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0(metaData.StorylineDetailsFiltered);

                //CONVERT JSONSTRING PLACEHOLDER
                //Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0();
                return true;
            };

            //START THE PROCESS
            processMetaData();

            //RETURN OUTPUTTED APPSETTINGS
            //return {
            //    StorylineDetails: this.StorylineDetails,
            //    StorylineDetails_Parameters: this.StorylineDetails_Parameters
            //};

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);
        }

        //#region STORE JSONSTRING PLACEHOLDER
        private void Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0(Object settingsList)
        {
            //if (settingsList)
            //{
            //    const options = Object.values(settingsList)

            //    for (const option of options) {
            //        const optionItem: any = option;
            //        const optionItemKey: string = optionItem[0];

            //        if (optionItemKey.toUpperCase().includes("_MAINPROFILE"))
            //        {
            //            this._optionsProfiles.push(optionItemKey);
            //        }
            //    }
            //}
        }
        //#endregion

        //#region CONVERT JSONSTRING PLACEHOLDER
        private void Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0()
        {
            //if (this._optionsProfiles)
            //{
            //    let columnsToUpdate: any = this._optionsProfiles;
            //    let columnsToUpdateValues: any = new Array();

            //    let storylineDetails: any = this.StorylineDetails;
            //    let storylineDetails_Parameters: any = this.StorylineDetails_Parameters;

            //    //CREATE OPTIONS SEARCHER
            //    const Step_3_1_Find_User_Options_1_0 = (columnToUpdate, jsonDataSet, jsonDataSetFilter, commitUpdate, updateValue): any => {
            //        let result: any;

            //        //GET TABLE COLUMNS
            //        let keyColumns = Object.keys(jsonDataSet).reverse();
            //        if (jsonDataSetFilter)
            //            keyColumns = Object.keys(jsonDataSet).filter(key => jsonDataSetFilter.includes(key)).reverse();

            //        //READ COLUMN INFORMATION
            //        keyColumns.forEach(function(columnKey) {
            //            //UPDATE THIS COLUMN
            //            if (columnKey.toLowerCase() === columnToUpdate.toLowerCase())
            //            {
            //                if (commitUpdate)
            //                {
            //                    //COMMIT THE UPDATE
            //                    if (updateValue.value)
            //                        jsonDataSet[columnKey] = { "value": updateValue.value };

            //                    if (updateValue.defaultValue)
            //                        jsonDataSet[columnKey] = { "value": updateValue.defaultValue };
            //                }
            //                else
            //                {
            //                    //YES..UPDATE COLUMN
            //                    result = jsonDataSet[columnKey];

            //                    //MARK FOR UPDATE
            //                    columnsToUpdateValues[columnKey] = result;
            //                }
            //            }
            //            else
            //            {
            //                //DO CHILDEN EXIST
            //                if (columnKey != "default")
            //                {
            //                    //MAYBE CHILDEN EXIST
            //                    var columnType = jsonDataSet[columnKey];

            //                    if (typeof columnType === 'object')
            //                    {
            //                        if (!columnKey.toUpperCase().includes("_DOCUMENTATIONPROFILE"))
            //                        {
            //                            //CHILDEN DO EXIST
            //                            Step_3_1_Find_User_Options_1_0(columnToUpdate, jsonDataSet[columnKey], null, commitUpdate, updateValue);
            //                        }
            //                    }
            //                }
            //            }
            //        });

            //        return columnsToUpdateValues;
            //    }

            //    //SET SEARCH FILTER
            //    let filterJSONDataSetBy: any = ['parameters'];

            //    //SET SEARCH DATASET                 
            //    let jsonDataSet: any = storylineDetails; //storylineDetails = C:\Programming\0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\2\1_0\State_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0.json
            //    if (storylineDetails_Parameters)
            //    {
            //        jsonDataSet = storylineDetails_Parameters;

            //        filterJSONDataSetBy = null;
            //    } //storylineDetails_Parameters = C:\Programming\0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\2\1_0\State_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0-P1_0.json

            //    //MEMORIZE CUSTOM OPTIONS
            //    for (const columnToUpdate of columnsToUpdate) {
            //        //FIND CUSTOM OPTIONS
            //        const nodeToUpdateValue: any = Step_3_1_Find_User_Options_1_0(columnToUpdate, jsonDataSet, filterJSONDataSetBy, false, null);

            //        //CHANGE SEARCH FILTER
            //        filterJSONDataSetBy = ['resources'];

            //        //UPDATE OPTIONS DATASET
            //        Step_3_1_Find_User_Options_1_0(columnToUpdate, storylineDetails, filterJSONDataSetBy, true, nodeToUpdateValue[columnToUpdate]);

            //        //MEMORIZE CUSTOM OPTIONS
            //        this.StorylineDetails = storylineDetails; //storylineDetails = CUSTOM OPTIONS
            //    }
            //}
        }
        //#endregion

        #endregion
    }
}
