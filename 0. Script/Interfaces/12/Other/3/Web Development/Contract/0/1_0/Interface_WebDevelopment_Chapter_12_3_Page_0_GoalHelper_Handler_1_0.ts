declare module namespace {

    //#region JSON to HTML Interfaces

    export interface Attribute {
        id: string;
    }

    export interface FunctionParameter {
        parameterName: string;
        parameterTypeScriptDataType: string;
        parameterDefaultValue: string;
    }

    export interface Event {
        functionsEnabled: string;
        functionEvent: string;
        functionName: string;
        functionParameters: FunctionParameter[];
    }

    export interface HTMLContentItem {
        Notes: string;
        Tag: string;
        Attributes: Attribute[];
        Value: string;
        Events: Event[];
        ParentHTMLContentItemAttributeID: string;
        ChildHTMLContentDetails: any[];
        ChildHTMLContentFlowDirection: string;
    }

    export interface Value {
        HTMLContentItemRowID: string;
        HTMLContentItems: HTMLContentItem[];
    }

    export interface _2_2_2_3_1_clientInformationHTMLContentItem {
        searchkey: string;
        type: string;
        value: Value;
    }

    export interface _2_2_2_3_2_clientInformationHTMLContentItem {
        searchkey: string;
        type: string;
        value: Value;
    }

    export interface _2_2_2_3_3_clientInformationHTMLContentItem {
        searchkey: string;
        type: string;
        value: Value;
    }

    export interface _2_2_2_3_4_clientInformationHTMLContentItem {
        searchkey: string;
        type: string;
        value: Value;
    }

    export interface Value2 {
        _2_2_2_3_1_clientInformationHTMLContentItem: _2_2_2_3_1_clientInformationHTMLContentItem;
        _2_2_2_3_2_clientInformationHTMLContentItem: _2_2_2_3_2_clientInformationHTMLContentItem;
        _2_2_2_3_3_clientInformationHTMLContentItem: _2_2_2_3_3_clientInformationHTMLContentItem;
        _2_2_2_3_4_clientInformationHTMLContentItem: _2_2_2_3_4_clientInformationHTMLContentItem;
    }

    export interface _2_2_2_3_clientInformationHTMLContentDetails {
        searchkey: string;
        type: string;
        value: Value2[];
    }


    //#endregion
}

