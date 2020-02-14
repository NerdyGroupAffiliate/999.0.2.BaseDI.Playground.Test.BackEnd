using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.IO;

using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.WebUtilities;
using Newtonsoft.Json.Linq;

namespace BaseDI.Playground.Test.Backend
{
    public class Client_Chapter_2_4_Create_WebDevelopment_For_Item_1_0_Test
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
        public Client_Chapter_2_4_Create_WebDevelopment_For_Item_1_0_Test()
        {
            #region 1. Variables

            #endregion

            #region 2. Logic

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        [SetUp]
        public void Setup()
        {
            #region 1. Variable

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

            #region 2. Logic

            #endregion
        }

        #endregion

        #region 4. Action

        //A. Story in motion (DO SOMETHING)
        [Test]
        public void Chapter_2_4_XXX_1_0_XXX()
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

            Assert.Pass();

            #endregion

            #region 3. Results

            #endregion
        }

        #endregion
    }
}
