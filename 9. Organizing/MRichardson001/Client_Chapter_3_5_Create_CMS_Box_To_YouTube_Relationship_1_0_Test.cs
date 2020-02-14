using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading;
using BaseDI.Playground.Test.Backend;
using Dropbox.Api;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Upload;
using Google.Apis.Util.Store;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;

namespace BaseDI.Playground.Test.Backend
{
    public class Client_Chapter_3_5_Create_CMS_Box_To_YouTube_Relationship_1_0_Test
    {
        #region 1. Variables

        //A. Variable Declaration
        private Dictionary<string, object> _stageDefaults = new Dictionary<string, object>();

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        //B. Character of Story (PERSON)
        //C. Scenery of Story (PLACE)
        //D. Things apart of Story (THINGS)

        #endregion

        #region 3. Set

        //A. Default state of story
        [SetUp]
        public void Setup()
        {
            #region 1. Variable Declaration

            #endregion

            #region 2. Variable Assignment

            #region A. Client

            _stageDefaults["Client_CharacterID"] = "1";
            _stageDefaults["Client_LocalPath"] = AppDomain.CurrentDomain.BaseDirectory;

            #endregion

            #region B. Service

            #endregion

            #region C. Security

            #endregion

            #region D. Business

            #endregion

            #region E. Data

            _stageDefaults["Database_LocalPath"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\";
            _stageDefaults["Database_LocalPath_Auditing_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";
            //_stageDefaults["Database_Type"] = Repository_DataStorageType.Excel;

            #endregion

            #endregion

            #region 3. Logic

            #endregion
        }

        #endregion

        #region 4. Action

        //A. Story in motion (DO SOMETHING)

        //Upload a video to YouTube 
        [Test]
        public void Chapter_3_4_Can_Download_From_Box_and_Upload_Video_to_YouTube()
        {
            #region 1. Variables

            #region A. Client

            #endregion

            #region B. Service

            #endregion

            #region C. Security

            #endregion

            #region D. Business

            #endregion

            #region E. Data

            //_stageDefaults["Database_LocalPath_Storyline_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Performance Arts\Storyline.xlsx";
            //_stageDefaults["Database_LocalPath_StorylineAudit_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";

            //_stageDefaults["Database_LocalPath_WebsiteContent_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteContent.xlsx";
            //_stageDefaults["TestData_LocalPath_WebsiteFoundation_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteFoundation.html";

            #endregion

            #endregion

            #region 2. Logic

            var videoFile = new List<string>();
            byte[] localFileBytes = new byte[] { };
            using (var BoxClient = new DropboxClient("f_QLvJGpSFAAAAAAAAAAEqa-twrzZnKWBpVVhoDOnhGhuf_ARHAM0wKEcYeWfUmP", new DropboxClientConfig("JWPLayer Agent")))
            {
                var list = BoxClient.Files.ListFolderAsync(string.Empty).Result;

                foreach (var item in list.Entries)
                {
                    if (!item.IsFile)
                    {
                        continue;
                    }

                    var fielMetadata = item.AsFile;
                    videoFile.Add(item.Name);
                }

                foreach (var fileToUpload in videoFile)
                {
                    if (fileToUpload.Contains(".mp4"))
                    {
                        using (var download = BoxClient.Files.DownloadAsync("/" + fileToUpload).Result)
                        {
                            FileInfo fileMetaData = new FileInfo(download.Response.AsFile.PathDisplay);

                            string localFileSavedPath = _stageDefaults["Database_LocalPath"] + @"Video Streaming\" + fileMetaData.Name;

                            localFileBytes = download.GetContentAsByteArrayAsync().Result;

                            File.WriteAllBytes(localFileSavedPath, localFileBytes);
                            //Send to account # 1
                            UserCredential userAccountCredential;
                            using (var stream = new FileStream(Path.GetFullPath(@"\8. State\Data\Security\account_1.json"), FileMode.Open, FileAccess.Read))
                            {
                                userAccountCredential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                                    GoogleClientSecrets.Load(stream).Secrets,
                                    // This OAuth 2.0 access scope allows an application to upload files to the
                                    // authenticated user's YouTube channel, but doesn't allow other types of access.
                                    new[] { YouTubeService.Scope.YoutubeUpload },
                                    "user",
                                    CancellationToken.None
                                ).Result;

                                var youtubeService = new YouTubeService(new BaseClientService.Initializer()
                                {
                                    HttpClientInitializer = userAccountCredential,
                                    ApplicationName = Assembly.GetExecutingAssembly().GetName().Name
                                });

                                var video = new Video();
                                video.Snippet = new VideoSnippet();
                                video.Snippet.Title = "Default Video Title";
                                video.Snippet.Description = "Default Video Description";
                                video.Snippet.Tags = new string[] { "tag1", "tag2" };
                                // See https://developers.google.com/youtube/v3/docs/videoCategories/list
                                video.Snippet.CategoryId = "22";
                                video.Status = new VideoStatus();
                                // or "private" or "public"
                                video.Status.PrivacyStatus = "unlisted";
                                // Replace with path to actual movie file.
                                var filePath = localFileSavedPath;

                                using (var fileStream = new FileStream(filePath, FileMode.Open))
                                {
                                    var videosInsertRequest =
                                        youtubeService.Videos.Insert(video, "snippet,status", fileStream, "video/*");
                                    //videosInsertRequest.ProgressChanged += YouTubeStatus.videosInsertRequest_ProgressChanged;
                                    //videosInsertRequest.ResponseReceived += YouTubeStatus.videosInsertRequest_ResponseReceived;

                                    var result = videosInsertRequest.UploadAsync().Result;
                                }
                            }

                            File.Delete(localFileSavedPath);
                        }
                    }

                }
            }

            //Send to account # 2

            #endregion

            #region 3. Results

            #endregion
        }

        #endregion
    }
}
