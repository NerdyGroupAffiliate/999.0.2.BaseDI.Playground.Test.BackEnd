export module BaseDI.Professional.BackEnd.Character.Role.TheBuyer.Customer_Service_1 {
    export interface SearchKey_AccountDetails_Organzations_Business_1_0_Asssistant_2_2_2_1_businessInformationAccountDetails {
        _2_2_2_1_businessInformationAccountDetails: StorylineDetails_Instructions_Details_Account_Details;
    }

    export interface StorylineDetails_Instructions_Details_Account_Details {
        searchkey: string;
        type: string;
        value: StorylineDetails_Instructions_Details_Account_Details_Items[];
    }

    export interface StorylineDetails_Instructions_Details_Account_Details_Items {
        _2_2_2_1_1_businessInformationAccountItem: StorylineDetails_Instructions_Details_Account_Item;
    }

    export interface StorylineDetails_Instructions_Details_Account_Item {
        searchkey: string;
        type: string;
        value: StorylineDetails_Instructions_Details_Account_Item_Value;
    }

    export interface StorylineDetails_Instructions_Details_Account_Item_Value {
        AccountItemRowID: string;
        AccountItemAccountID: string;
        AccountItemLookupCode: string;
        AccountItemMainCategory: string;
        AccountItemSubCategory: string;
        AccountItemTargetNiche: string;
        AccountItemNicheKeywords: string[];
    }
}