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
            //READ CUSTOM OPTIONS
            var options = Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0.Step_1_0_Read_Custom_Options(StorylineDetails, "", _baseDIPlaceHolderValue, true);

            //PROFILE CUSTOM OPTIONS
            Step_2_0_Profile_Custom_Options_1_0(options);

            //MEMORIZE CUSTOM OPTIONS
            Step_3_0_Memorize_Custom_Options_1_0();

            //RETURN UPDATED OBSERVATIONS
            string a = StorylineDetails.ToString();

            return await Task.FromResult(StorylineDetails).ConfigureAwait(true);
        }

        #region PROFILE CUSTOM OPTIONS

        private void Step_2_0_Profile_Custom_Options_1_0(List<JToken> optionList)
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

        #region MEMORIZE CUSTOM OPTIONS

        private void Step_3_0_Memorize_Custom_Options_1_0()
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
