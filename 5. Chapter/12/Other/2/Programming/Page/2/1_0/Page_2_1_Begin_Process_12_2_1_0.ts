import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

export namespace BaseDI.BackEnd.Chapter.Page.Programming_2
{
    export class Page_2_1_Begin_Process_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0
    {
        //#region 1. Assign
        private _optionsProfiles: Array<string> = new Array();  

        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //#region 1. Assign
            this.StorylineDetails = storylineDetails;
            this.Repository = repository;

            this.Action = this.Action.bind(this);
            //#endregion

            //#region 2. Action
            //#endregion

            //#region 3. Observe
            //#endregion
        }
        //#endregion

        //#region 3. Set
        //#endregion

        //#region 4. Action
        public async Action(): Promise<object>
        {
            this.Repository.ExtraData = this.ExtraData;
            this.Repository.MasterStorer = this.MasterStorer;

            //CREATE THE PROCESS
            const processMetaData = async () =>
            {
                //EXECUTE THE PROCESS
                this.Repository.Action_9_Verify_Process().then(metaData =>
                {
                    //STORE META DATA
                    this.StorylineDetails = metaData.StorylineDetails;
                    this.StorylineDetails_Parameters = metaData.StorylineDetails_Parameters;

                    //STORE JSONSTRING PLACEHOLDER
                    this.Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0(metaData.StorylineDetailsFiltered);

                    //CONVERT JSONSTRING PLACEHOLDER
                    this.Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0();

                    return;
                })
            }

            //START THE PROCESS
            await processMetaData();

            //RETURN OUTPUTTED APPSETTINGS
            return {
                StorylineDetails: this.StorylineDetails,
                StorylineDetails_Parameters: this.StorylineDetails_Parameters
            };
        }

        //#region STORE JSONSTRING PLACEHOLDER
        private Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0(settingsList: any)
        {
            if (settingsList) {
                const options = Object.values(settingsList)

                for (const option of options) {
                    const optionItem: any = option;
                    const optionItemKey: string = optionItem[0];

                    if (optionItemKey.toUpperCase().includes("_MAINPROFILE")) {
                        this._optionsProfiles.push(optionItemKey);
                    }
                }
            }
        }
        //#endregion

        //#region CONVERT JSONSTRING PLACEHOLDER
        private Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0() {
            if (this._optionsProfiles) {
                let columnsToUpdate: any = this._optionsProfiles;
                let columnsToUpdateValues: any = new Array();

                let storylineDetails: any = this.StorylineDetails;
                let storylineDetails_Parameters: any = this.StorylineDetails_Parameters;

                //CREATE OPTIONS SEARCHER
                const Step_3_1_Find_User_Options_1_0 = (columnToUpdate, jsonDataSet, jsonDataSetFilter, commitUpdate, updateValue): any => {
                    let result: any;

                    //GET TABLE COLUMNS
                    let keyColumns = Object.keys(jsonDataSet).reverse();
                    if (jsonDataSetFilter)
                        keyColumns = Object.keys(jsonDataSet).filter(key => jsonDataSetFilter.includes(key)).reverse();

                    //READ COLUMN INFORMATION
                    keyColumns.forEach(function (columnKey) {
                        //UPDATE THIS COLUMN
                        if (columnKey.toLowerCase() === columnToUpdate.toLowerCase()) {
                            if (commitUpdate) {
                                //COMMIT THE UPDATE
                                if (updateValue.value)
                                    jsonDataSet[columnKey] = { "value": updateValue.value };

                                if (updateValue.defaultValue)
                                    jsonDataSet[columnKey] = { "value": updateValue.defaultValue };
                            }
                            else {
                                //YES..UPDATE COLUMN
                                result = jsonDataSet[columnKey];

                                //MARK FOR UPDATE
                                columnsToUpdateValues[columnKey] = result;
                            }
                        }
                        else {
                            //DO CHILDEN EXIST
                            if (columnKey != "default") {
                                //MAYBE CHILDEN EXIST
                                var columnType = jsonDataSet[columnKey];

                                if (typeof columnType === 'object') {
                                    if (!columnKey.toUpperCase().includes("_DOCUMENTATIONPROFILE")) {
                                        //CHILDEN DO EXIST
                                        Step_3_1_Find_User_Options_1_0(columnToUpdate, jsonDataSet[columnKey], null, commitUpdate, updateValue);
                                    }
                                }
                            }
                        }
                    });

                    return columnsToUpdateValues;
                }

                //SET SEARCH FILTER
                let filterJSONDataSetBy: any = ['parameters'];

                //SET SEARCH DATASET                 
                let jsonDataSet: any = storylineDetails; //storylineDetails = C:\Programming\0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\2\1_0\State_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0.json
                if (storylineDetails_Parameters) {
                    jsonDataSet = storylineDetails_Parameters;

                    filterJSONDataSetBy = null;
                } //storylineDetails_Parameters = C:\Programming\0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\2\1_0\State_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0-P1_0.json

                //MEMORIZE CUSTOM OPTIONS
                for (const columnToUpdate of columnsToUpdate) {
                    //FIND CUSTOM OPTIONS
                    const nodeToUpdateValue: any = Step_3_1_Find_User_Options_1_0(columnToUpdate, jsonDataSet, filterJSONDataSetBy, false, null);

                    //CHANGE SEARCH FILTER
                    filterJSONDataSetBy = ['resources'];

                    //UPDATE OPTIONS DATASET
                    Step_3_1_Find_User_Options_1_0(columnToUpdate, storylineDetails, filterJSONDataSetBy, true, nodeToUpdateValue[columnToUpdate]);

                    //MEMORIZE CUSTOM OPTIONS
                    this.StorylineDetails = storylineDetails; //storylineDetails = CUSTOM OPTIONS
                }
            }
        }
        //#endregion

        //#endregion
    }
}