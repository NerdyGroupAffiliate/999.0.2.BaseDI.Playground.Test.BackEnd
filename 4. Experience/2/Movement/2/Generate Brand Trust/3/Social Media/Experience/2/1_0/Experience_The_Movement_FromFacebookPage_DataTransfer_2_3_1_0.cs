

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using BaseDI.Playground.Test.Backend.Character_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using System.Text;
using BaseDI.Playground.Test.Backend.Script.Programming.Extensions_1;
using System.Linq;
using BaseDI.Playground.Test.Backend.State.Social_Media_;
using BaseDI.Playground.Test.Backend.Script.Programming.Poco_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Repository_1;

namespace BaseDI.Playground.Test.Backend.Experience.Movement.Social_Media_2
{    
    public class Experience_The_Movement_FromFacebookPage_DataTransfer_2_3_1_0 : aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        //Assign Characters involved in storyline
        private ProgrammingDotNet_Implementer_3_12_1_0 _dotNetDeveloper = null;

        private ExtraData_12_2_1_0 _extraData = null;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Experience_The_Movement_FromFacebookPage_DataTransfer_2_3_1_0()
        {
            #region 1. Assign            


            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        //A. Story in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            #region 1. Assign

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns            
            Use_DesignPattern_Builder_Experience_2_3_1_0 designPattern = new Use_DesignPattern_Builder_Experience_2_3_1_0(Client, MasterLeader, StorylineDetails, StorylineDetails_Parameters, (IContract_Programming_Repository_12_2_1_0)Repository, ExtraData, EntryPoint);

            #endregion

            #region 2. Action

            #region HANDLE LOGIC REQUEST

            StorylineDetails = await designPattern.Action().ConfigureAwait(true);

            #endregion

            #endregion

            #region 3. Observe

            #endregion

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);
        }

        #endregion
    }

    #region 5. Action Script

    //A. Prepare for Action (SETUP WHAT WILL HAPPEN)

    internal class Use_DesignPattern_Builder_Experience_2_3_1_0
    {
        #region 1. Assign

        internal object _centralizedStorer;
        internal Dictionary<string, object> _client;

        internal JObject _storylineDetails;
        internal JObject _storylineDetails_Parameters;

        internal IContract_Programming_Repository_12_2_1_0 _repository;

        internal ExtraData_12_2_1_0 _extraData;
        internal aClass_Programming_ScriptRoutable_12_2_1_0 _entryPoint;

        #endregion

        #region 2. Ready
        internal Use_DesignPattern_Builder_Experience_2_3_1_0(Dictionary<string, object> client, object centralizedStorer, JObject storylineDetails, JObject storylineDetails_Parameters, IContract_Programming_Repository_12_2_1_0 repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _centralizedStorer = centralizedStorer;
            _client = client;

            _extraData = extraData;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;

            _repository = repository;

            _entryPoint = entryPoint;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        internal async Task<JObject> Action()
        {            
            #region ARRANGE LOGIC ORDER

            var builder = new Implement_DesignPattern_Builder_Experience_2_3_1_0(_client, _centralizedStorer, _storylineDetails, _storylineDetails_Parameters, _repository, _extraData, _entryPoint);

            _storylineDetails = await builder.Action_1_Begin_Process().ConfigureAwait(true);

            _storylineDetails = await builder.Action_2_Validate_Process().ConfigureAwait(true);

            _storylineDetails = await builder.Action_3_Process_StoryAuthor().ConfigureAwait(true);
            _storylineDetails = await builder.Action_4_Process_StoryCharacters().ConfigureAwait(true);
            _storylineDetails = await builder.Action_5_Process_StorySetting().ConfigureAwait(true);
            _storylineDetails = await builder.Action_6_Process_StoryExperiences().ConfigureAwait(true);
            _storylineDetails = await builder.Action_7_Process_StoryResources().ConfigureAwait(true);

            _storylineDetails = await builder.Action_8_Process_CRUD().ConfigureAwait(true);

            _storylineDetails = await builder.Action_9_Verify_Process().ConfigureAwait(true);

            _storylineDetails = await builder.Action_10_End_Process().ConfigureAwait(true);

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        #endregion
    }

    #endregion

    #region 6. Action Implementation

    //A. Commence Storyline (ACT WHAT HAS HAPPENED)

    internal class Implement_DesignPattern_Builder_Experience_2_3_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //Coding information
        private string _entryPointName = "Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0";

        private IContract_Programming_Repository_12_2_1_0 _repository;

        private object _centralizedStorer;
        private Dictionary<string, object> _client;

        private JObject _storylineDetails = null;
        private JObject _storylineDetails_Parameters = null;

        private ExtraData_12_2_1_0 _extraData = null;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _entryPoint;

        //Available Repositories
        //private RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 _experienceRepository_2_3_1_0;

        //Response Observation template
        private string _dataObservationTemplate = "";

        //API Information
        private List<JToken> _parameterTokens = null;

        private string _securityAppId = "";
        private string _securityAppSecret = "";
        private string _securityToken = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Experience_2_3_1_0(object client, object centralizedStorer, JObject storylineDetails, JObject storylineDetails_Parameters, IContract_Programming_Repository_12_2_1_0 repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _centralizedStorer = centralizedStorer;
            _client = (Dictionary<string, object>)client;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;

            _repository = repository;

            _extraData = extraData;

            _entryPoint = entryPoint;

            HandleChapterDefaults();
        }

        #endregion

        #region 3. Set

        private void HandleChapterDefaults()
        {

        }

        #endregion

        #region 4. Action

        //Page 1-1

        public override async Task<JObject> Action_1_Begin_Process()
        {
            #region 1. Assign 



            #endregion

            #region 2. Action     

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. Assign          

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. Assign          

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }


        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-2

        public override async Task<JObject> Action_2_Validate_Process()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_7_Process_CRUD_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-3
        public override async Task<JObject> Action_3_Process_StoryAuthor()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_3_Process_HTMLLayoutContainer_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-4
        public override async Task<JObject> Action_4_Process_StoryCharacters()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_4_Process_HTMLLayoutRows_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_5_Process_HTMLLayoutZones_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-6
        public override async Task<JObject> Action_6_Process_StoryExperiences()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_6_Process_HTMLLayoutZoneColumns_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_8_Verify_Process_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_9_End_Process_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        #endregion

        #endregion
    }

    #endregion
}

//public class Experience_AwarenessFacebookVideo_Status_7_1_1_0 : aScriptExperience_12_2_1_0
//{
//    readonly string _accessToken;
//    readonly string _pageID;
//    readonly string _facebookAPI = "https://graph.facebook.com/";
//    readonly string _pageEdgeFeed = "feed";
//    readonly string _pageEdgePhotos = "photos";
//    readonly string _pageEdgeVideo = "videos";
//    readonly string _postToPageURL;
//    readonly string _postToPagePhotosURL;
//    readonly string _postToPageVideosURL;


//    public Experience_AwarenessFacebookVideo_Status_7_1_1_0(string accessToken, string pageID, JObject storylineDetails)
//    {
//        _accessToken = accessToken;
//        _pageID = pageID;
//        _postToPageURL = $"{_facebookAPI}{pageID}/{_pageEdgeFeed}";
//        _postToPagePhotosURL = $"{_facebookAPI}{pageID}/{_pageEdgePhotos}";
//        _postToPageVideosURL = $"{_facebookAPI}{pageID}/{_pageEdgeVideo}";
//    }

//    /// <summary>
//    /// Publish a simple text post
//    /// </summary>
//    /// <returns>StatusCode and JSON response</returns>
//    /// <param name="postText">Text for posting</param>
//    public async Task<Tuple<int, string>> PublishSimplePost(string postText)
//    {
//        using (var http = new HttpClient())
//        {
//            var postData = new Dictionary<string, string> {
//                { "access_token", _accessToken },
//                { "message", postText }//,
//                // { "formatting", "MARKDOWN" } // doesn't work
//            };

//            var httpResponse = await http.PostAsync(
//                _postToPageURL,
//                new FormUrlEncodedContent(postData)
//                );
//            var httpContent = await httpResponse.Content.ReadAsStringAsync();

//            return new Tuple<int, string>(
//                (int)httpResponse.StatusCode,
//                httpContent
//                );
//        }
//    }

//    public string PublishVideoToFaceBook(string videoURL)
//    {
//        try
//        {
//            var resVideo = Task.Run(async () =>
//            {
//                using (var http = new HttpClient())
//                {
//                    return await UploadVideo(videoURL);
//                }
//            });
//            var resVideoJson = JObject.Parse(resVideo.Result.Item2);

//            if (resVideo.Result.Item1 != 200)
//            {
//                try // return error from JSON
//                {
//                    return $"Error uploading photo to Facebook. {resVideoJson["error"]["message"].Value<string>()}";
//                }
//                catch (Exception ex) // return unknown error
//                {
//                    // log exception somewhere
//                    return $"Unknown error uploading photo to Facebook. {ex.Message}";
//                }
//            }

//            //string uploadSessionID = resVideoJson["upload_session_id"].Value<string>();


//        }
//        catch (Exception ex)
//        {
//            return $"Unknown error publishing post to Facebook. {ex.Message}";
//        }

//        return "ok";
//    }

//    /// <summary>
//    /// Publish a post to Facebook page
//    /// </summary>
//    /// <returns>Result</returns>
//    /// <param name="postText">Post to publish</param>
//    /// <param name="pictureURL">Post to publish</param>
//    public string PublishToFacebook(string postText, string pictureURL)
//    {
//        try
//        {
//            // upload picture first
//            var resImage = Task.Run(async () =>
//            {
//                using (var http = new HttpClient())
//                {
//                    return await UploadPhoto(pictureURL);
//                }
//            });
//            var resImageJson = JObject.Parse(resImage.Result.Item2);

//            if (resImage.Result.Item1 != 200)
//            {
//                try // return error from JSON
//                {
//                    return $"Error uploading photo to Facebook. {resImageJson["error"]["message"].Value<string>()}";
//                }
//                catch (Exception ex) // return unknown error
//                {
//                    // log exception somewhere
//                    return $"Unknown error uploading photo to Facebook. {ex.Message}";
//                }
//            }
//            // get post ID from the response
//            string postID = resImageJson["post_id"].Value<string>();

//            // and update this post (which is actually a photo) with your text
//            var resText = Task.Run(async () =>
//            {
//                using (var http = new HttpClient())
//                {
//                    return await UpdatePhotoWithPost(postID, postText);
//                }
//            });
//            var resTextJson = JObject.Parse(resText.Result.Item2);

//            if (resText.Result.Item1 != 200)
//            {
//                try // return error from JSON
//                {
//                    return $"Error posting to Facebook. {resTextJson["error"]["message"].Value<string>()}";
//                }
//                catch (Exception ex) // return unknown error
//                {
//                    // log exception somewhere
//                    return $"Unknown error posting to Facebook. {ex.Message}";
//                }
//            }

//            return "OK";
//        }
//        catch (Exception ex)
//        {
//            // log exception somewhere
//            return $"Unknown error publishing post to Facebook. {ex.Message}";
//        }
//    }

//    /// <summary>
//    /// 
//    /// </summary>
//    /// <param name="videoURL"></param>
//    /// <returns></returns>
//    public async Task<Tuple<int, string>> UploadVideo(string videoURL)
//    {
//        using (var http = new HttpClient())
//        {
//            var postData = new Dictionary<string, string>
//            {
//                {"access_toke", _accessToken},
//                {"url", videoURL},
//                {"upload_phase", "start"},
//                {"file_size", ""}
//            };

//            var httpResponse = await http.PostAsync(
//                _postToPageVideosURL,
//                new FormUrlEncodedContent(postData)
//            );
//            var httpContent = await httpResponse.Content.ReadAsStringAsync();

//            return new Tuple<int, string>(
//                (int)httpResponse.StatusCode,
//                httpContent
//            );
//        }
//    }

//    /// <summary>
//    /// Upload a picture (photo)
//    /// </summary>
//    /// <returns>StatusCode and JSON response</returns>
//    /// <param name="photoURL">URL of the picture to upload</param>
//    public async Task<Tuple<int, string>> UploadPhoto(string photoURL)
//    {
//        using (var http = new HttpClient())
//        {
//            var postData = new Dictionary<string, string> {
//                { "access_token", _accessToken },
//                { "url", photoURL }
//            };

//            var httpResponse = await http.PostAsync(
//                _postToPagePhotosURL,
//                new FormUrlEncodedContent(postData)
//                );
//            var httpContent = await httpResponse.Content.ReadAsStringAsync();

//            return new Tuple<int, string>(
//                (int)httpResponse.StatusCode,
//                httpContent
//                );
//        }
//    }

//    /// <summary>
//    /// Update the uploaded picture (photo) with the given text
//    /// </summary>
//    /// <returns>StatusCode and JSON response</returns>
//    /// <param name="postID">Post ID</param>
//    /// <param name="postText">Text to add tp the post</param>
//    public async Task<Tuple<int, string>> UpdatePhotoWithPost(string postID, string postText)
//    {
//        using (var http = new HttpClient())
//        {
//            var postData = new Dictionary<string, string> {
//                { "access_token", _accessToken },
//                { "message", postText }//,
//                // { "formatting", "MARKDOWN" } // doesn't work
//            };

//            var httpResponse = await http.PostAsync(
//                $"{_facebookAPI}{postID}",
//                new FormUrlEncodedContent(postData)
//                );
//            var httpContent = await httpResponse.Content.ReadAsStringAsync();

//            return new Tuple<int, string>(
//                (int)httpResponse.StatusCode,
//                httpContent
//                );
//        }
//    }

//    public override Task<JObject> Action_1_Begin_Process()
//    {
//        throw new NotImplementedException();
//    }

//    public override Task<JObject> Action_2_Validate_Process()
//    {
//        throw new NotImplementedException();
//    }

//    public override Task<JObject> Action_3_Process_StoryAuthor()
//    {
//        throw new NotImplementedException();
//    }

//    public override Task<JObject> Action_4_Process_StoryCharacters()
//    {
//        throw new NotImplementedException();
//    }

//    public override Task<JObject> Action_5_Process_StorySetting()
//    {
//        throw new NotImplementedException();
//    }

//    public override Task<JObject> Action_6_Process_StoryExperiences()
//    {
//        throw new NotImplementedException();
//    }

//    public override Task<JObject> Action_7_Process_StoryResources()
//    {
//        throw new NotImplementedException();
//    }

//    public override Task<JObject> Action_8_Process_CRUD()
//    {
//        throw new NotImplementedException();
//    }

//    public override Task<JObject> Action_9_Verify_Process()
//    {
//        throw new NotImplementedException();
//    }

//    public override Task<JObject> Action_10_End_Process()
//    {
//        throw new NotImplementedException();
//    }
//}