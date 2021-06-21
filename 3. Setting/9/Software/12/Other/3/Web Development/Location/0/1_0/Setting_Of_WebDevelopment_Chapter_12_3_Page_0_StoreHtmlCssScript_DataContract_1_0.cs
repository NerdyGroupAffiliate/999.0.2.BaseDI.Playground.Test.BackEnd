using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseDI.Professional.Setting.Software.Web_Development_0
{
    #region JSON to HTML Interfaces

    //public class HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS
    //{
    //    public HTMLContentDetails_SetImplementer_ProductCreation_WebDevelopment_HTML _2_2_2_3_clientInformationHTMLContentDetails;
    //}

    public class HTMLContentDetails_SetImplementer_ProductCreation_WebDevelopment_HTML
    {
        public string searchkey;
        public string type;
        public List<HtmlSections> value = new List<HtmlSections>();
    }

    public class HtmlSections
    {
        public HtmlSection _2_2_2_3_1_clientInformationHTMLContentItem; //Container
        public HtmlSection _2_2_2_3_2_clientInformationHTMLContentItem; //Rows
        public HtmlSection _2_2_2_3_3_clientInformationHTMLContentItem; //Columns
        public HtmlSection _2_2_2_3_4_clientInformationHTMLContentItem; //Content
    }

    public class HtmlSection
    {
        public string searchkey;
        public string type;
        public HtmlSectionDetails value;
    }

    public class HtmlSectionDetails
    {
        public string HTMLContentItemRowID;
        public List<HtmlSectionDetail> HTMLContentItems = new List<HtmlSectionDetail>();
    }

    public class HtmlSectionDetail
    {
        public string Notes;
        public string Tag;
        public List<HtmlAttribute> Attributes = new List<HtmlAttribute>();
        public string Value;
        public List<HtmlFunctionEvents> Events = new List<HtmlFunctionEvents>();
        public string ParentHTMLContentItemAttributeID;
        public List<HtmlSectionDetail> ChildHTMLContentDetails = new List<HtmlSectionDetail>();
        public string ChildHTMLContentFlowDirection;
    }

    public class HtmlAttribute
    {
        public string id;
        public string src;
        public string href;
        public string alt;
    }

    public class HtmlFunctionParameter
    {
        public string parameterName;
        public string parameterTypeScriptDataType;
        public string parameterDefaultValue;
    }

    public class HtmlFunctionEvents
    {
        public string functionsEnabled;
        public string functionEvent;
        public string functionName;
        public List<HtmlFunctionParameter> functionParameters = new List<HtmlFunctionParameter>();
    }

    #endregion

    #region JSON to CSS Interfaces

    public class SearchKey_HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS
    {
        public HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS _2_2_2_4_clientInformationHTMLContentStylingDetails;
    }

    public class HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS
    {
        public string searchkey;
        public string type;
        public List<CSSSections> value = new List<CSSSections>();
    }

    public class CSSSections
    {
        public CSSSection _2_2_2_4_1_clientInformationHTMLContentStylingItem;
    }

    public class CSSSection
    {
        public string searchkey;
        public string type;
        public CssSectionDetails value;
    }

    public class CssSectionDetails
    {
        public string HTMLContentStylingItemRowID;
        public List<CssSectionDetail> HTMLContentStylingItemFiles = new List<CssSectionDetail>();
    }

    public class CssSectionDetail
    {
        public string StyleFilePathLocal;
        public string StyleFilePathRemote;
        public List<CssStyleFile> StyleFiles = new List<CssStyleFile>();
    }

    public class CssStyleFile
    {
        public string StyleFileName;
        public List<string> StyleFileSupportedProperties = new List<string>();
        public List<CssStyleFileUseProperty> StyleFileUseProperties = new List<CssStyleFileUseProperty>();
    }

    public class CssStyleFileUseProperty
    {
        public string attributeID;
        public List<CssProperty> properties = new List<CssProperty>();
        public string IsMediaQuery;
        public string IsHtmlTag;
        public List<CssMediaQuery> MediaQueryResolutions = new List<CssMediaQuery>();
    }

    public class CssProperty
    {
        public string propertyName;
        public List<string> properyValues = new List<string>();
    }

    public class CssMediaQuery
    {
        public CssMediaQueryResolution resolutions;
        public List<CssProperty> properties = new List<CssProperty>();
        public List<CssMediaQuery> ChildrenResolutions = new List<CssMediaQuery>();
    }

    public class CssMediaQueryResolution
    {
        public string mediaQuery;
        public string mediaQueryAttributeIDOverride;        
    }

    #endregion

    #region JSON to SEO Interfaces

    public class SearchKey_HTMLSEODetails_SetImplementer_ProductCreation_SEO_SearchEngine
    {
        StorylineDetails_Instructions_Details_SEO_Details _2_2_2_2_clientInformationHTMLSEODetails;
    }

    public class StorylineDetails_Instructions_Details_SEO_Details
    {
        string searchkey;
        string type;
        List<StorylineDetails_Instructions_Details_SEO_Items> value = new List<StorylineDetails_Instructions_Details_SEO_Items>();
    }

    public class StorylineDetails_Instructions_Details_SEO_Items
    {
        StorylineDetails_Instructions_Details_SEO_Item _2_2_2_2_1_clientInformationHTMLSEOItem;
    }

    public class StorylineDetails_Instructions_Details_SEO_Item
    {
        string searchkey;
        string type;
        StorylineDetails_Instructions_Details_SEO_Value value;
    }

    public class StorylineDetails_Instructions_Details_SEO_Value
    {
        string HTMLSEOItemRowID;
        string HTMLSEOItemMetaTitleAndSlug;
        List<string> HTMLSEOItemMetaKeyWords = new List<string>();
        string HTMLSEOItemMetaDescription;
        string HTMLSEOItemSearchCode;
    }

    #endregion
}
