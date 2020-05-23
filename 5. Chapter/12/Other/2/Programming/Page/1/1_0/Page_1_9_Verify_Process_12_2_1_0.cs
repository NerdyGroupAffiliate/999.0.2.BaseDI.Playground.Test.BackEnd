using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Extensions_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Repository_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;

using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Chapter.Page.Programming_1
{
    public class Page_1_9_Verify_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   
        private Dictionary<string, string> _optionsProfiles = new Dictionary<string, string>();
        private string _baseDIPlaceHolderValue = "{BASEDICUSTOMOPTION}";

        private Dictionary<string, object> _client;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_9_Verify_Process_12_2_1_0(JObject storylineDetails, IContract_Programming_Repository_12_2_1_0 repository)
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
            //STORE META DATA
            var metaData = Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.Step_X_X_Custom_Store_JSONSettingsIntoMemory_1_0(StorylineDetails, "", _baseDIPlaceHolderValue, true);

            //STORE JSONSTRING PLACEHOLDER
            Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0(metaData);

            //CONVERT JSONSTRING PLACEHOLDER
            Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0();

            //RETURN OUTPUTTED APPSETTINGS
            return await Task.FromResult(StorylineDetails).ConfigureAwait(true);
        }

        #region STORE JSONSTRING PLACEHOLDER

        private void Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0(List<JToken> optionList)
        {
            if (optionList.Count > 0)
            {
                var options = optionList;

                foreach (var option in options)
                {
                    if (option.Path.ToUpper(CultureInfo.CurrentCulture).Contains("_MAINPROFILE"))
                    {
                        JProperty property = (JProperty)option.Parent;

                        string path = property.Path;

                        path = path.Replace("storylineDetails.", "");
                        path = path.Replace("storylineDetails_Parameters.", "");

                        _optionsProfiles.Add(property.Name, property.Path);
                    }
                }
            }
        }

        #endregion

        #region CONVERT JSONSTRING PLACEHOLDER

        private void Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0()
        {
            //HAVE AVAILABLE OPTIONS?
            if (_optionsProfiles.Count > 0)
            {
                List<Tuple<string, string, string, string>> updatedOptions = new List<Tuple<string, string, string, string>>();
                Dictionary<string, string> nodes = new Dictionary<string, string>();

                try
                {
                    //SEARCH AVAILABLE OPTIONS
                    foreach (var optionProfile in _optionsProfiles)
                    {
                        //FIND USER OPTION
                        Func<JToken, List<Tuple<string, string, string, string>>, Dictionary<string, string>, string, bool> jsonRecursion = null;

                        jsonRecursion = (JToken userOption, List<Tuple<string, string, string, string>> updatedOptions, Dictionary<string, string> nodes, string parentLocation) =>
                        {
                            if (userOption.HasValues)
                            {
                                foreach (JToken option in userOption.Children())
                                {
                                    if (option.Type == JTokenType.Property)
                                    {
                                        JProperty userOptionMetaData = (JProperty)option;

                                        if (parentLocation == "")
                                        {
                                            parentLocation = userOptionMetaData.Name;
                                        }
                                        else
                                        {
                                            parentLocation += "." + userOptionMetaData.Name;
                                        }

                                        if (userOptionMetaData.Name == optionProfile.Key)
                                        {
                                            Tuple<string, string, string, string> updatedOption = new Tuple<string, string, string, string>(optionProfile.Key, optionProfile.Value, userOptionMetaData.Name, userOptionMetaData.Path);

                                            updatedOptions.Add(updatedOption);
                                        }
                                    }

                                    jsonRecursion(option, updatedOptions, nodes, parentLocation);
                                }

                                // we are done parsing and this is a parent node
                                return true;
                            }
                            else
                            {
                                // leaf of the tree
                                if (nodes.ContainsKey(parentLocation))
                                {
                                    // this was an array
                                    nodes[parentLocation] += "|" + userOption.ToString();
                                }
                                else
                                {
                                    // this was a single property
                                    nodes.Add(parentLocation, userOption.ToString());

                                    if (userOption.Type == JTokenType.Property)
                                    {
                                        JProperty userOptionMetaData = (JProperty)userOption;

                                        if (userOptionMetaData.Name == optionProfile.Key)
                                        {
                                            Tuple<string, string, string, string> updatedOption = new Tuple<string, string, string, string>(optionProfile.Key, optionProfile.Value, userOptionMetaData.Name, userOptionMetaData.Path);

                                            updatedOptions.Add(updatedOption);
                                        }
                                    }
                                }

                                return false;
                            }
                        };

                        jsonRecursion(StorylineDetails_Parameters, updatedOptions, nodes, "");
                    }
                }
                catch 
                {
                    throw;
                }

                //UPDATE USER OPTION
                if (updatedOptions.Any())
                {
                    foreach(var updatedOption in updatedOptions)
                    {
                        StorylineDetails.SelectToken(updatedOption.Item2).Replace(StorylineDetails_Parameters.SelectToken(updatedOption.Item4));
                    }
                }
            }
        }

        #endregion    

        #endregion
    }
}
