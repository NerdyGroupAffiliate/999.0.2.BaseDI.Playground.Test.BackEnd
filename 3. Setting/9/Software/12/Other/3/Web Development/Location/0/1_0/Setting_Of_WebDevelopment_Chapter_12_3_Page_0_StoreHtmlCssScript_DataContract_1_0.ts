export module BaseDI.Professional.BackEnd.Setting.Location.Web_Development {
    //#region JSON to HTML Interfaces

    export interface SearchKey_HTMLSEODetails_SetImplementer_ProductCreation_SEO_SearchEngine {
        _2_2_2_4_clientInformationHTMLContentStylingDetails: HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS;
    }

    export interface HTMLContentDetails_SetImplementer_ProductCreation_WebDevelopment_HTML {
        searchkey: string;
        type: string;
        value: HtmlSections[];
    }

    export interface HtmlSections {
        _2_2_2_3_1_clientInformationHTMLContentItem: HtmlSection; //Container
        _2_2_2_3_2_clientInformationHTMLContentItem: HtmlSection; //Rows
        _2_2_2_3_3_clientInformationHTMLContentItem: HtmlSection; //Columns
        _2_2_2_3_4_clientInformationHTMLContentItem: HtmlSection; //Content
    }

    export interface HtmlSection {
        searchkey: string;
        type: string;
        value: HtmlSectionDetails;
    }

    export interface HtmlSectionDetails {
        HTMLContentItemRowID: string;
        HTMLContentItems: HtmlSectionDetail[];
    }

    export interface HtmlSectionDetail {
        Notes: string;
        Tag: string;
        Attributes: HtmlAttribute[];
        Value: string;
        Events: HtmlFunctionEvents[];
        ParentHTMLContentItemAttributeID: string;
        ChildHTMLContentDetails: HtmlSectionDetail[];
        ChildHTMLContentFlowDirection: string;
    }

    export interface HtmlAttribute {
        id?: string;
        src?: string;
        href?: string;
        alt?: string;
    }

    export interface HtmlFunctionParameter {
        parameterName: string;
        parameterTypeScriptDataType: string;
        parameterDefaultValue: string;
    }

    export interface HtmlFunctionEvents {
        functionsEnabled?: string;
        functionEvent?: string;
        functionName?: string;
        functionParameters?: HtmlFunctionParameter[];
    }

    //#endregion

    //#region JSON to CSS Interfaces

    export interface SearchKey_HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS {
        _2_2_2_4_clientInformationHTMLContentStylingDetails: HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS;
    }

    export interface HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS {
        searchkey: string;
        type: string;
        value: CSSSections[];
    }

    export interface CSSSections {
        _2_2_2_4_1_clientInformationHTMLContentStylingItem: CSSSection;
    }

    export interface CSSSection {
        searchkey: string;
        type: string;
        value: CssSectionDetails;
    }

    export interface CssSectionDetails {
        HTMLContentStylingItemRowID: string;
        HTMLContentStylingItemFiles: CssSectionDetail[];
    }

    export interface CssSectionDetail {
        StyleFilePathLocal: string;
        StyleFilePathRemote: string;
        StyleFiles: CssStyleFile[];
    }

    export interface CssStyleFile {
        StyleFileName: string;
        StyleFileSupportedProperties: string[];
        StyleFileUseProperties: CssStyleFileUseProperty[];
    }

    export interface CssStyleFileUseProperty {
        attributeID: string;
        properties: CssProperty[];
        IsMediaQuery: string;
        IsHtmlTag: string;
        MediaQueryResolutions: CssMediaQuery[];
    }

    export interface CssProperty {
        propertyName: string;
        properyValues: string[];
    }

    export interface CssMediaQuery {
        resolutions: CssMediaQueryResolution;
        properties: CssProperty[];
    }

    export interface CssMediaQueryResolution {
        mediaQueryFeature1: string;
        mediaQueryAndOrNot: string;
        mediaQueryFeature2: string;
    }

    //#endregion

    //#region JSON to SEO Interfaces

    export interface SearchKey_HTMLSEODetails_SetImplementer_ProductCreation_SEO_SearchEngine {
        _2_2_2_2_clientInformationHTMLSEODetails: StorylineDetails_Instructions_Details_SEO_Details;
    }

    export interface StorylineDetails_Instructions_Details_SEO_Details {
        searchkey: string;
        type: string;
        value: StorylineDetails_Instructions_Details_SEO_Items[];
    }

    export interface StorylineDetails_Instructions_Details_SEO_Items {
        _2_2_2_2_1_clientInformationHTMLSEOItem: StorylineDetails_Instructions_Details_SEO_Item;
    }

    export interface StorylineDetails_Instructions_Details_SEO_Item {
        searchkey: string;
        type: string;
        value: StorylineDetails_Instructions_Details_SEO_Value;
    }

    export interface StorylineDetails_Instructions_Details_SEO_Value {
        HTMLSEOItemRowID: string;
        HTMLSEOItemMetaTitleAndSlug: string;
        HTMLSEOItemMetaKeyWords: string[];
        HTMLSEOItemMetaDescription: string;
        HTMLSEOItemSearchCode: string;
    }





   





    //#endregion
}
