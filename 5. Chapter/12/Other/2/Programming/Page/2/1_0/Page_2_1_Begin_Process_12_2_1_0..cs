using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Repository_1;
using BaseDI.BackEnd.Script.Programming_1;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Chapter.Page.Programming_2
{
    public class Page_2_1_Begin_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign
        public List<JToken> _optionsProfiles = new List<JToken>();


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
        private void Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0(JObject settingsList)
        {
            if (settingsList != null)
            {
                //const options = Object.values(settingsList)

                List<JToken> options = new List<JToken>();

                foreach (var settng in settingsList)
                {
                    options.Add(settng.Value);
                };

                foreach (var option in options)
                {
                    var optionItem = option;
                    var optionItemKey = optionItem[0];

                    if (optionItemKey.ToString().ToUpper().Contains("_MAINPROFILE"))
                    {
                        this._optionsProfiles.Add(optionItemKey);
                    }
                }
            }
        }
        //#endregion

        //#region CONVERT JSONSTRING PLACEHOLDER
        private void Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0()
        {
            if (this._optionsProfiles.Any())
            {
                var columnsToUpdate = this._optionsProfiles;
                var columnsToUpdateValues = new JObject();

                var storylineDetails = this.StorylineDetails;
                var storylineDetails_Parameters = this.StorylineDetails_Parameters;

                //CREATE OPTIONS SEARCHER
                JObject Step_3_1_Find_User_Options_1_0(string columnToUpdate, JObject jsonDataSet, string jsonDataSetFilter, bool commitUpdate, UpdateValue updateValue)
                {
                    JToken result;

                    //GET TABLE COLUMNS
                    List<string> keyColumns = new List<string>();
                    foreach (var dataset in jsonDataSet)
                    {
                        keyColumns.Add(dataset.Key);
                    }

                    if (jsonDataSetFilter != null)
                    {
                        keyColumns = null;

                        foreach (var dataSet in jsonDataSet)
                        {
                            if (jsonDataSetFilter.Contains(dataSet.Key))
                            {
                                keyColumns.Add(dataSet.Key);
                            }

                        }
                    }

                    //READ COLUMN INFORMATION
                    keyColumns.ForEach(columnKey =>
                    {
                        //UPDATE THIS COLUMN
                        if (columnKey.ToLower() == columnToUpdate.ToLower())
                        {
                            if (commitUpdate)
                            {
                                //COMMIT THE UPDATE
                                if (updateValue.value != null)
                                {
                                    jsonDataSet[columnKey] = updateValue.value;
                                }
                                if (updateValue.defaultValue != null)
                                {
                                    jsonDataSet[columnKey] = updateValue.defaultValue;
                                }
                            }
                            else
                            {
                                //YES..UPDATE COLUMN
                                result = jsonDataSet[columnKey];

                                //MARK FOR UPDATE
                                columnsToUpdateValues[columnKey] = result;

                            }
                        }
                        else
                        {
                            //DO CHILDEN EXIST
                            if (columnKey != "default")
                            {
                                //MAYBE CHILDEN EXIST
                                var columnType = jsonDataSet[columnKey];

                                if (columnType.Equals(typeof(JObject)))
                                {
                                    if (!columnKey.ToUpper().Contains("_DOCUMENTATIONPROFILE"))
                                    {
                                        //CHILDEN DO EXIST
                                        Step_3_1_Find_User_Options_1_0(columnToUpdate, jsonDataSet, null, commitUpdate, updateValue);
                                    }
                                }
                            }
                        }
                    });

                    return columnsToUpdateValues;
                }
            }
            //#endregion

            #endregion
        }

       
    }
     public class UpdateValue
    {
        public JToken value;
        internal JToken defaultValue;
    }
}

   