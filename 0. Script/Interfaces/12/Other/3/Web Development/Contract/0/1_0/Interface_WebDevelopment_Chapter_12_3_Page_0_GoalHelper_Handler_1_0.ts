module Interface_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0 {

    //#region JSON to HTML Interfaces

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
        ChildHTMLContentDetails: any[];
        ChildHTMLContentFlowDirection: string;
    }

    export interface HtmlAttribute {

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
}

export { Interface_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0 as IWebDevelopment_12_3 }

