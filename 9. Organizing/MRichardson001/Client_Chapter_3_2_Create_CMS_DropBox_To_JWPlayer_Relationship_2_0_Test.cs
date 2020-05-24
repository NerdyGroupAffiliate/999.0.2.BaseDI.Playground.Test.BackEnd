using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.WebUtilities;
using Newtonsoft.Json.Linq;
using BaseDI.BackEnd.Experience.Web_Development_;

namespace BaseDI.BackEnd
{
    public class Client_Chapter_3_2_Create_CMS_DropBox_To_JWPlayer_Relationship_2_0_Test
    {
        //#region 1. Variables

        ////A. Variable Declaration
        //private Dictionary<string, object> _stageDefaults = new Dictionary<string, object>();

        //#endregion

        //#region 2. Ready

        ////A. Constructor Instantiation
        ////B. Character of Story (PERSON)
        ////C. Scenery of Story (PLACE)
        ////D. Things apart of Story (THINGS)

        //#endregion

        //#region 3. Set

        ////A. Default state of story
        //[SetUp]
        //public void Setup()
        //{
        //    #region 1. Variables

        //    #region A. Client

        //    _stageDefaults["Client_CharacterID"] = "1";
        //    _stageDefaults["Client_LocalPath"] = AppDomain.CurrentDomain.BaseDirectory;

        //    #endregion

        //    #region B. Service

        //    #endregion

        //    #region C. Security

        //    #endregion

        //    #region D. Business

        //    #endregion

        //    #region E. Data

        //    _stageDefaults["Database_LocalPath"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\";
        //    _stageDefaults["Database_LocalPath_Auditing_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";
        //    //_stageDefaults["Database_Type"] = Repository_DataStorageType.Excel;

        //    #endregion

        //    #endregion

        //    #region 2. Logic

        //    #endregion
        //}

        //#endregion

        //#region 4. Action

        ////A. Story in motion (DO SOMETHING)

        ////Upload a video to JWPlayer 
        //[Test]
        //public void Chapter_3_2_Can_Download_From_Box_and_Upload_Video_to_JWPlayer()
        //{
        //    #region 1. Variables

        //    #region A. Client

        //    //long TimeStamp = Convert.ToInt64(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)));
        //    Int32 unixTimeStamp = (Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
        //    Random RandomNumber = new Random();
        //    int GeneratedNonce = RandomNumber.Next(10000000, 99999999);

        //    var parameters = new Dictionary<string, string>();

        //    #endregion

        //    #region B. Service

        //    var baseUri = new Uri("http://api.jwplatform.com/v1/");
        //    var apiKey = "N2yf5Mcc";
        //    var apiSecret = "G11jty0rz8beFDQ7C4ssd3Eq";

        //    parameters.Add("api_key", apiKey);
        //    parameters.Add("api_timestamp", unixTimeStamp.ToString());
        //    parameters.Add("api_nonce", GeneratedNonce.ToString());
        //    parameters.Add("api_format", "json");
        //    parameters.Add("title", "Hello World");
        //    parameters.Add("description", "This is awesome");
        //    parameters.Add("author", "Mark Richardson");

        //    #endregion

        //    #region C. Security

        //    #endregion

        //    #region D. Business

        //    #endregion

        //    #region E. Data

        //    //_stageDefaults["Database_LocalPath_Storyline_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Performance Arts\Storyline.xlsx";
        //    //_stageDefaults["Database_LocalPath_StorylineAudit_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";

        //    //_stageDefaults["Database_LocalPath_WebsiteContent_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteContent.xlsx";
        //    //_stageDefaults["TestData_LocalPath_WebsiteFoundation_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteFoundation.html";

        //    #endregion

        //    #endregion

        //    #region 2. Logic

        //    var SortedKeys = new string[parameters.Keys.Count];
        //    parameters.Keys.CopyTo(SortedKeys, 0);

        //    Array.Sort(SortedKeys);

        //    // Result of all sorted key and paramaters to be signed
        //    var Signed = "";
        //    var HashedResult = new StringBuilder();
        //    string[] sortedkeys = SortedKeys;

        //    for (int i = 0; i < sortedkeys.Length; i++)
        //    {
        //        Signed += (i == 0 ? "" : "&") + sortedkeys[i] + "=" + parameters[sortedkeys[i]];
        //    }

        //    Signed += apiSecret;
        //    byte[] Utf8Encoded = Encoding.UTF8.GetBytes(Signed);

        //    using (var Sha1 = SHA1.Create())
        //    {
        //        byte[] HashedValue = Sha1.ComputeHash(Utf8Encoded);
        //        foreach (var b in HashedValue)
        //        {
        //            var HexedValue = b.ToString("x2");
        //            HashedResult.Append(HexedValue);
        //        }
        //    }

        //    parameters.Add("api_signature", HashedResult.ToString());

        //    var client = new HttpClient
        //    {
        //        BaseAddress = baseUri
        //    };

        //    var requestUri = QueryHelpers.AddQueryString("videos/create", parameters);

        //    var request = new HttpRequestMessage(HttpMethod.Get, requestUri);

        //    var result = client.SendAsync(request).Result;
        //    Stream receiveStream = result.Content.ReadAsStreamAsync().Result;
        //    StreamReader readStream = new StreamReader(receiveStream, Encoding.UTF8);

        //    //readStream.ReadToEnd();

        //    dynamic videoCreateJsonResult = JObject.Parse(readStream.ReadToEnd());
        //    string status = videoCreateJsonResult.status;
        //    Assert.AreEqual("ok", status);

        //    //This is where the Box Api will come in to get the video
        //    var videoFile = new List<string>();
        //    byte[] localFileBytes = new byte[] { };
        //    using (var BoxClient = new DropboxClient("f_QLvJGpSFAAAAAAAAAAEqa-twrzZnKWBpVVhoDOnhGhuf_ARHAM0wKEcYeWfUmP", new DropboxClientConfig("JWPLayer Agent")))
        //    {
        //        var list = BoxClient.Files.ListFolderAsync(string.Empty).Result;


        //        foreach (var item in list.Entries)
        //        {
        //            if (!item.IsFile)
        //            {
        //                continue;
        //            }

        //            var fielMetadata = item.AsFile;
        //            videoFile.Add(item.Name);
        //        }

        //        foreach (var fileToUpload in videoFile)
        //        {
        //            if (fileToUpload.Contains(".mp4"))
        //            {
        //                using (var download = BoxClient.Files.DownloadAsync("/" + fileToUpload).Result)
        //                {
        //                    FileInfo fileMetaData = new FileInfo(download.Response.AsFile.PathDisplay);

        //                    string localFileSavedPath = _stageDefaults["Database_LocalPath"] + @"Video Streaming\" + fileMetaData.Name;

        //                    localFileBytes = download.GetContentAsByteArrayAsync().Result;

        //                    File.WriteAllBytes(localFileSavedPath, localFileBytes);

        //                    NameValueCollection _queryString = new NameValueCollection();
        //                    _queryString.Add("key", $"{videoCreateJsonResult.link.query.key}");
        //                    _queryString.Add("token", $"{videoCreateJsonResult.link.query.token}");

        //                    var uploadClient = new Experience_The_Movement_FromWebClient_DataTransfer_2_1_1_0();
        //                    var filePath = Path.GetFileName($"SampleVideo.mp4");

        //                    ServicePointManager.Expect100Continue = false;

        //                    uploadClient.Timeout = 7200000;
        //                    uploadClient.BaseAddress = baseUri.ToString();
        //                    uploadClient.QueryString = _queryString;
        //                    uploadClient.Encoding = Encoding.UTF8;

        //                    var webHeaderCollection = new WebHeaderCollection();
        //                    webHeaderCollection.Add("Content-Disposition", $"attachment; filename=\"{Path.GetFileName(filePath)}\"");

        //                    _queryString.Add("api_format", "json");

        //                    Array.Sort(_queryString.AllKeys);
        //                    StringBuilder sb = new StringBuilder();

        //                    foreach (string key in _queryString.AllKeys)
        //                    {
        //                        sb.AppendFormat("{0}={1}&", key, _queryString[key]);
        //                    }
        //                    //remove trailing &
        //                    sb.Remove(sb.Length - 1, 1);
        //                    var _args = "";
        //                    _args = sb.ToString();

        //                    var callUrl = $"{videoCreateJsonResult.link.protocol}://{videoCreateJsonResult.link.address}{videoCreateJsonResult.link.path}?{_args}";

        //                    byte[] uploadResponse = uploadClient.UploadFile(callUrl, localFileSavedPath);
        //                    Console.WriteLine(Encoding.UTF8.GetString(uploadResponse));

        //                    File.Delete(localFileSavedPath);
        //                }
        //            }

        //        }
        //    }

        //    // This does the upload to jwplayer
        //    //string path = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), @"Test.mp4");
        //    //byte[] file = File.ReadAllBytes(path);
        //    #endregion

        //    #region 3. Results

        //    #endregion
        //}

        //#endregion
    }
}
