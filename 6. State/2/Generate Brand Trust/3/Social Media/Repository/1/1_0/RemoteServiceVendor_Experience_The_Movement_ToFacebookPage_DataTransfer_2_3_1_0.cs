using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Professional.State.Social_Media_
{
    public class RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>, IContract_Programming_Repository_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration
        private JObject _storylineDetails = null;

        private string _entryPointName = "Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0";

        ///Facebook API values
        readonly string _facebookAPI = "https://graph.facebook.com/";
        readonly string _pageEdgeFeed = "feed";
        readonly string _pageEdgePhotos = "photos";
        readonly string _pageEdgeVideo = "videos";

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(JObject storylineDetails)
        {
            #region 1. Assign            

            _storylineDetails = storylineDetails;

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state
        public override void HandleDefaults()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - defaults handler


            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        //A. Story in motion (DO SOMETHING)

        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. Assign          

            var logicObservation = _storylineDetails.SelectToken("outputs[*].baseDIObservations[*].observation.metadata[?(@.calledByEntryPointName == '" + _entryPointName + "')]").Parent;

            var businessObservation = logicObservation.Children()["item"].Children().ToList().Where(t => t.Type == JTokenType.Property && ((JProperty)t).Name == "business").Select(i => i);          
            var securityObservation = logicObservation.Children()["item"].Children().ToList().Where(t => t.Type == JTokenType.Property && ((JProperty)t).Name == "security").Select(i => i);

            Dictionary<string, string> facebookDelieveryKeyValues = new Dictionary<string, string>();
            Dictionary<string, string> facebookSecurityKeyValues = new Dictionary<string, string>();

            #region READ BUSINESS INFORMATION

            foreach (var observation in businessObservation.Children().Children().Children().Children())
            {
                foreach(var observationChildren in observation.Children())
                {
                    var observationChildrenProperty = observationChildren.Children().Children().ToList();

                    string key = observationChildrenProperty[0].ToString();
                    string value = observationChildrenProperty[1].ToString();

                    if(!facebookDelieveryKeyValues.ContainsKey(key))
                        facebookDelieveryKeyValues.Add(key, value);
                }
            }

            #endregion

            #region READ SECURITY INFORMATION            

            foreach (var observation in securityObservation.Children().Children())
            {
                foreach (JProperty observationChildrenProperty in observation.Children().ToList())
                {
                    string key = observationChildrenProperty.Name;
                    string value = observationChildrenProperty.Value.ToString();

                    if (!facebookSecurityKeyValues.ContainsKey(key))
                        facebookSecurityKeyValues.Add(key, value);
                }
            }

            #endregion

            #endregion

            #region 2. Action              

            using (var http = new HttpClient())
            {
                var postData = new Dictionary<string, string> {
                            { "access_token", facebookSecurityKeyValues["token"] },
                            { "message", facebookDelieveryKeyValues["message"] }//,
                            // { "formatting", "MARKDOWN" } // doesn't work
                        };

                var postToPageURL = $"{_facebookAPI}{facebookDelieveryKeyValues["page_id"]}/{_pageEdgeFeed}";

                var httpResponse = await http.PostAsync(
                    postToPageURL,
                    new FormUrlEncodedContent(postData)
                    ).ConfigureAwait(true);
                var httpContent = await httpResponse.Content.ReadAsStringAsync();

                var response = new Tuple<int, string>(
                    (int)httpResponse.StatusCode,
                    httpContent
                    );

            }

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. Assign          


            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        public override async Task<JObject> Action_1_Begin_Process()
        {
            #region 1. Assign          


            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        public override async Task<JObject> Action_2_Validate_Process()
        {
            #region 1. Assign          


            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        public override async Task<JObject> Action_3_Process_StoryAuthor()
        {
            #region 1. Assign          


            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        public override async Task<JObject> Action_4_Process_StoryCharacters()
        {
            #region 1. Assign          


            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. Assign          


            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        public override async Task<JObject> Action_6_Process_StoryExperiences()
        {
            #region 1. Assign          


            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. Assign          


            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. Assign          


            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        #endregion

        #endregion
    }
}
