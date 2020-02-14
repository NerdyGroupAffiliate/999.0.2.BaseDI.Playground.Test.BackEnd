using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace BaseDI.Playground.Test.Backend
{
    public class Client_Chapter_3_4_Create_CMS_Box_To_Instagram_Relationship_1_0_Test
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
            #region 1. Variables

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

        //Upload a photo to Instagram 
        [Test]
        public void Chapter_3_4_Can_Download_From_Box_and_Upload_Photo_to_Instagram()
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

            //Send to account # 1


            //Send to account # 2

            #endregion

            #region 3. Results

            #endregion
        }

        //Upload a text to Instagram 
        [Test]
        public void Chapter_3_4_Can_Download_From_Box_and_Upload_Text_to_Instagram()
        {
            #region 1. Variable

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

            //Send to account # 1

            //Send to account # 2

            #endregion

            #region 3. Results

            #endregion
        }

        //Upload a video to Instagram 
        [Test]
        public void Chapter_3_4_Can_Download_From_Box_and_Upload_Video_to_Instagram()
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

            //Send to account # 1

            //Send to account # 2

            #endregion

            #region 3. Results

            #endregion
        }

        #endregion
    }
}
