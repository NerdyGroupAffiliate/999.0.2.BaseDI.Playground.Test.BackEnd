using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using Stripe;

namespace BaseDI.Playground.Test.Backend
{
    public class Client_Chapter_4_3_Create_Ecommerce_On_Stripe_1_0_Test
    {
        //#region 1. Variables

        ////A. Variable Declaration
        ////private StageClientList _stageClientList = new StageClientList();
        ////private StageDataList _stageDataList = new StageDataList();
        ////private StageServiceList _stageSeviceList = new StageServiceList();

        ////private StageInfo _stageInfo;

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


        //    #endregion

        //    #region B. Service

        //    //Create service information.
        //    //_stageSeviceList.Services.Add(new StageService { TestKey1 = "sk_test_4eC39HqLyjWDarjtT1zdp7dc", TestKey2 = "sk_test_yHAnmzRcrwLfouvE3KlPHP6M00k81w9cA7" });

        //    #endregion

        //    #region C. Security

        //    #endregion

        //    #region D. Business

        //    #endregion

        //    #region E. Data


        //    #endregion

        //    #endregion

        //    #region 2. Logic

        //    #endregion
        //}

        //#endregion

        //#region 4. Action

        ////A. Story in motion (DO SOMETHING)

        ////Create a customer on Stripe 
        //[Test]
        //public void Chapter_4_3_Can_Create_Customer_On_Stripe()
        //{

        //    #region 1. Variables

        //    #region A. Client

        //    #endregion

        //    #region B. Service

        //    //StripeConfiguration.SetApiKey(_stageSeviceList.Services[0].TestKey1);

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

        //    var options = new CustomerCreateOptions
        //    {
        //        Email = "thephantom1979@gmail.com",
        //        Description = "thephantom1979@gmail.com",
        //        SourceToken = "tok_amex"
        //    };

        //    var service = new CustomerService();
        //    Customer customer = service.Create(options);

        //    #endregion

        //    #region 3. Results

        //    #endregion
        //}

        ////Create a payment method on Stripe 
        //[Test]
        //public void Chapter_4_3_Can_Create_Payment_Method_On_Stripe()
        //{
        //    #region 1. Variables

        //    #region A. Client

        //    #endregion

        //    #region B. Service

        //    //StripeConfiguration.SetApiKey(_stageSeviceList.Services[0].TestKey1);

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

        //    var options = new PaymentMethodCreateOptions
        //    {
        //        Type = "card",
        //        Card = new PaymentMethodCardCreateOptions()
        //        {
        //            Number = "4242424242424242",
        //            ExpMonth = 5,
        //            ExpYear = 2020,
        //            Cvc = "123",
        //        },
        //    };

        //    var service = new PaymentMethodService();
        //    var paymentMethod = service.Create(options);

        //    #endregion

        //    #region 3. Results

        //    #endregion
        //}

        ////Create a product on Stripe 
        //[Test]
        //public void Chapter_4_3_Can_Create_Product_On_Stripe()
        //{
        //    #region 1. Variables

        //    #region A. Client

        //    #endregion

        //    #region B. Service

        //    //StripeConfiguration.SetApiKey(_stageSeviceList.Services[0].TestKey1);

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

        //    var service = new ProductService();
        //    var options = new ProductCreateOptions
        //    {
        //        Name = "T-shirt",
        //        Type = "good",
        //        Description = "Comfortable cotton t-shirt",
        //        Attributes = new List<string>() { "size", "gender" },
        //    };
        //    Product product = service.Create(options);
        //    Assert.AreEqual("ok", product.StripeResponse.ObjectJson);

        //    #endregion

        //    #region 3. Results

        //    #endregion
        //}

        ////Create a SINGLE order on Stripe 
        //[Test]
        //public void Chapter_4_3_Can_Create_Single_Order_On_Stripe()
        //{
        //    #region 1. Variables

        //    #region A. Client

        //    #endregion

        //    #region B. Service

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

        //    var options = new RequestOptions
        //    {
        //        ApiKey = "" //_stageSeviceList.Services[0].TestKey1
        //    };
        //    var service = new ChargeService();
        //    Charge charge = service.Get(
        //        "ch_19yUeq2eZvKYlo2CSwbttFrw",
        //        options
        //    );

        //    #endregion

        //    #region 3. Results

        //    #endregion
        //}

        ////Create a SUBSCRIPTION order on Stripe 
        //[Test]
        //public void Chapter_4_3_Can_Create_Subscription_Order_On_Stripe()
        //{
        //    #region 1. Variables

        //    #region A. Client

        //    #endregion

        //    #region B. Service

        //    //StripeConfiguration.SetApiKey(_stageSeviceList.Services[0].TestKey1);

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

        //    var items = new List<SubscriptionItemOption> {
        //        new SubscriptionItemOption {
        //            PlanId = "plan_F1Vd5lsSFNVzYV"
        //        }
        //    };
        //    var options = new SubscriptionCreateOptions
        //    {
        //        CustomerId = "cus_F1WFBOQwksynBf",
        //        Items = items
        //    };

        //    var service = new SubscriptionService();
        //    Subscription subscription = service.Create(options);

        //    #endregion

        //    #region 3. Results

        //    #endregion
        //}

        ////Create a SUBSCRIPTION CANCELLATION order on Stripe 
        //[Test]
        //public void Chapter_4_3_Can_Create_Subscription_Cancellation_Order_On_Stripe()
        //{
        //    #region 1. Variables

        //    #region A. Client

        //    #endregion

        //    #region B. Service

        //    //StripeConfiguration.SetApiKey(_stageSeviceList.Services[0].TestKey1);

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

        //    var service = new SubscriptionService();
        //    var subscription = service.Cancel("sub_F1WFLaaDZui1O8", null);

        //    #endregion

        //    #region 3. Results

        //    #endregion
        //}

        ////Create a refund on Stripe 
        //[Test]
        //public void Chapter_4_3_Can_Create_Refund_On_Stripe()
        //{
        //    #region 1. Variables

        //    #region A. Client

        //    #endregion

        //    #region B. Service

        //    //StripeConfiguration.SetApiKey(_stageSeviceList.Services[0].TestKey1);

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

        //    var refundCreateOptions = new RefundCreateOptions
        //    {
        //        Amount = 300,
        //        Reason = RefundReasons.Fraudulent
        //    };
        //    var requestOptions = new RequestOptions
        //    {
        //        StripeConnectAccountId = "ch_19yUeq2eZvKYlo2CSwbttFrw"
        //    };

        //    var service = new RefundService();
        //    Refund refund = service.Create(refundCreateOptions);

        //    #endregion

        //    #region 3. Results

        //    #endregion
        //}

        //#endregion
    }
}
