using NUnit.Framework;

using System;
using System.Collections.Generic;
using System.Reflection;

namespace BaseDI.BackEnd
{
    //public class Client_Chapter_4_2_Create_Ecommerce_On_Paypal_1_0_Test
    //{
    //    #region 1. Variables

    //    //A. Variable Declaration
    //    private Dictionary<string, object> _stageDefaults = new Dictionary<string, object>();

    //    #endregion

    //    #region 2. Ready

    //    //A. Constructor Instantiation
    //    //B. Character of Story (PERSON)
    //    //C. Scenery of Story (PLACE)
    //    //D. Things apart of Story (THINGS)

    //    #endregion

    //    #region 3. Set

    //    //A. Default state of story
    //    [SetUp]
    //    public void Setup()
    //    {
    //        #region 1. Variables

    //        #region A. Client

    //        _stageDefaults["Client_CharacterID"] = "1";
    //        _stageDefaults["Client_LocalPath"] = AppDomain.CurrentDomain.BaseDirectory;

    //        #endregion

    //        #region B. Service

    //        #endregion

    //        #region C. Security

    //        #endregion

    //        #region D. Business

    //        #endregion

    //        #region E. Data

    //        _stageDefaults["Database_LocalPath"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\";
    //        _stageDefaults["Database_LocalPath_Auditing_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";
    //        //_stageDefaults["Database_Type"] = Repository_DataStorageType.Excel;

    //        #endregion

    //        #endregion

    //        #region 2. Logic

    //        #endregion
    //    }

    //    #endregion

    //    #region 4. Action

    //    //A. Story in motion (DO SOMETHING)

    //    //Create a product on Paypal 
    //    [Test]
    //    public void Chapter_4_2_Can_Create_Product_On_Paypal()
    //    {
    //        #region 1. Variables

    //        var config = ConfigManager.Instance.GetProperties();
    //        var accessToken = new OAuthTokenCredential(config).GetAccessToken();
    //        Dictionary<string, string> configurationMap = new Dictionary<string, string>();
    //        APIContext apiContext = new APIContext();

    //        #region A. Client

    //        #endregion

    //        #region B. Service

    //        configurationMap.Add("clientId", "...");
    //        configurationMap.Add("clientSecret", "...");
    //        configurationMap.Add("mode", "sandbox");

    //        apiContext.Config = ConfigManager.Instance.GetProperties();
    //        apiContext.Config["connectionTimeout"] = "1000";

    //        #endregion

    //        #region C. Security

    //        #endregion

    //        #region D. Business

    //        #endregion

    //        #region E. Data

    //        //_stageDefaults["Database_LocalPath_Storyline_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Performance Arts\Storyline.xlsx";
    //        //_stageDefaults["Database_LocalPath_StorylineAudit_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";

    //        //_stageDefaults["Database_LocalPath_WebsiteContent_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteContent.xlsx";
    //        //_stageDefaults["TestData_LocalPath_WebsiteFoundation_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteFoundation.html";

    //        #endregion

    //        #endregion

    //        #region 2. Logic
            
    //        if (apiContext.HTTPHeaders == null)
    //        {
    //            apiContext.HTTPHeaders = new Dictionary<string, string>();
    //        }
    //        apiContext.HTTPHeaders["some-header-name"] = "some-value";

    //        var payment = Payment.Get(apiContext, "PAY-0XL713371A312273YKE2GCNI");

    //        payment.Create(apiContext);

    //        #endregion

    //        #region 3. Results

    //        #endregion
    //    }

    //    //Create a customer on Paypal 
    //    [Test]
    //    public void Chapter_4_2_Can_Create_Customer_On_Paypal()
    //    {
    //        #region 1. Variables

    //        #region A. Client

    //        #endregion

    //        #region B. Service

    //        #endregion

    //        #region C. Security

    //        #endregion

    //        #region D. Business

    //        #endregion

    //        #region E. Data

    //        //_stageDefaults["Database_LocalPath_Storyline_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Performance Arts\Storyline.xlsx";
    //        //_stageDefaults["Database_LocalPath_StorylineAudit_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";

    //        //_stageDefaults["Database_LocalPath_WebsiteContent_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteContent.xlsx";
    //        //_stageDefaults["TestData_LocalPath_WebsiteFoundation_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteFoundation.html";

    //        #endregion

    //        #endregion

    //        #region 2. Logic

    //        //Send to account # 1

    //        //Send to account # 2

    //        #endregion

    //        #region 3. Results

    //        #endregion
    //    }

    //    //Create a payment method on Paypal 
    //    [Test]
    //    public void Chapter_4_2_Can_Create_Payment_Method_On_Paypal()
    //    {
    //        #region 1. Variables

    //        #region A. Client

    //        #endregion

    //        #region B. Service

    //        #endregion

    //        #region C. Security

    //        #endregion

    //        #region D. Business

    //        #endregion

    //        #region E. Data

    //        //_stageDefaults["Database_LocalPath_Storyline_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Performance Arts\Storyline.xlsx";
    //        //_stageDefaults["Database_LocalPath_StorylineAudit_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";

    //        //_stageDefaults["Database_LocalPath_WebsiteContent_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteContent.xlsx";
    //        //_stageDefaults["TestData_LocalPath_WebsiteFoundation_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteFoundation.html";

    //        #endregion

    //        #endregion

    //        #region 2. Logic

    //        //Send to account # 1

    //        //Send to account # 2

    //        #endregion

    //        #region 3. Results

    //        #endregion
    //    }

    //    //Create a SINGLE order on Paypal 
    //    [Test]
    //    public void Chapter_4_2_Can_Create_Single_Order_On_Paypal()
    //    {
    //        #region 1. Variables

    //        #region A. Client

    //        #endregion

    //        #region B. Service

    //        #endregion

    //        #region C. Security

    //        #endregion

    //        #region D. Business

    //        #endregion

    //        #region E. Data

    //        //_stageDefaults["Database_LocalPath_Storyline_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Performance Arts\Storyline.xlsx";
    //        //_stageDefaults["Database_LocalPath_StorylineAudit_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";

    //        //_stageDefaults["Database_LocalPath_WebsiteContent_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteContent.xlsx";
    //        //_stageDefaults["TestData_LocalPath_WebsiteFoundation_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteFoundation.html";

    //        #endregion

    //        #endregion

    //        #region 2. Logic

    //        //Send to account # 1

    //        //Send to account # 2

    //        #endregion

    //        #region 3. Results

    //        #endregion
    //    }

    //    //Create a SUBSCRIPTION order on Paypal 
    //    [Test]
    //    public void Chapter_4_2_Can_Create_Subscription_Order_On_Paypal()
    //    {
    //        #region 1. Variables

    //        #region A. Client

    //        #endregion

    //        #region B. Service

    //        #endregion

    //        #region C. Security

    //        #endregion

    //        #region D. Business

    //        #endregion

    //        #region E. Data

    //        //_stageDefaults["Database_LocalPath_Storyline_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Performance Arts\Storyline.xlsx";
    //        //_stageDefaults["Database_LocalPath_StorylineAudit_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";

    //        //_stageDefaults["Database_LocalPath_WebsiteContent_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteContent.xlsx";
    //        //_stageDefaults["TestData_LocalPath_WebsiteFoundation_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteFoundation.html";

    //        #endregion

    //        #endregion

    //        #region 2. Logic

    //        //Send to account # 1

    //        //Send to account # 2

    //        #endregion

    //        #region 3. Results

    //        #endregion
    //    }

    //    //Create a SUBSCRIPTION CANCELLATION order on Stripe 
    //    [Test]
    //    public void Chapter_4_2_Can_Create_Subscription_Cancellation_Order_On_Paypal()
    //    {
    //        #region 1. Variables

    //        #region A. Client

    //        #endregion

    //        #region B. Service

    //        #endregion

    //        #region C. Security

    //        #endregion

    //        #region D. Business

    //        #endregion

    //        #region E. Data

    //        //_stageDefaults["Database_LocalPath_Storyline_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Performance Arts\Storyline.xlsx";
    //        //_stageDefaults["Database_LocalPath_StorylineAudit_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";

    //        //_stageDefaults["Database_LocalPath_WebsiteContent_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteContent.xlsx";
    //        //_stageDefaults["TestData_LocalPath_WebsiteFoundation_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteFoundation.html";

    //        #endregion

    //        #endregion

    //        #region 2. Logic

    //        //Send to account # 1

    //        //Send to account # 2

    //        #endregion

    //        #region 3. Results

    //        #endregion
    //    }

    //    //Create a refund on Paypal 
    //    [Test]
    //    public void Chapter_4_2_Can_Create_Refund_On_Paypal()
    //    {
    //        #region 1. Variables

    //        #region A. Client

    //        #endregion

    //        #region B. Service

    //        #endregion

    //        #region C. Security

    //        #endregion

    //        #region D. Business

    //        #endregion

    //        #region E. Data

    //        //_stageDefaults["Database_LocalPath_Storyline_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Performance Arts\Storyline.xlsx";
    //        //_stageDefaults["Database_LocalPath_StorylineAudit_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Risk Management\StorylineAudit.xlsx";

    //        //_stageDefaults["Database_LocalPath_WebsiteContent_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteContent.xlsx";
    //        //_stageDefaults["TestData_LocalPath_WebsiteFoundation_Excel"] = _stageDefaults["Client_LocalPath"] + @"8. State\Data\Web Development\WebsiteFoundation.html";

    //        #endregion

    //        #endregion

    //        #region 2. Logic

    //        //Send to account # 1

    //        //Send to account # 2

    //        #endregion

    //        #region 3. Results

    //        #endregion
    //    }

    //    #endregion
    //}
}
