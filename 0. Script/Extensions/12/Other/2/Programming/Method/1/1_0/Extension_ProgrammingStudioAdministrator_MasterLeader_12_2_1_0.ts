import * as ExtensionsJSON from "../../../../../../../../Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0";

const objectScan = require('object-scan');

export namespace BaseDI.Playground.Test.BackEnd.Programming.Extensions_1
{
    export class Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0
    {
        constructor() {

        }

        //#region CREATE
        public static Step_X_X_Create_A_MistakeJsonNode_1_0(metaDataCalledByEntryPointName: string, metaDataCalledByMethodName: string, metaDataCalledByMethodReason: string, mistakeDetailsTemplate: string): String {
            let outputMistakeBody: string = "{'baseDIMistakes': [{ 'mistake': { 'metadata': [{ 'calledByEntryPointName': '{calledByEntryPointName}' }, { 'calledByMethodName': '{calledByMethodName}' }, { 'calledByMethodReason': '{calledByMethodReason}' }, { 'item': {{item}} }] }}]}";

            let outputMistakeItem: string = "'details': [{details}]";

            outputMistakeBody = outputMistakeBody.replace("{item}", outputMistakeItem);

            outputMistakeBody = outputMistakeBody.replace("{calledByEntryPointName}", metaDataCalledByEntryPointName);
            outputMistakeBody = outputMistakeBody.replace("{calledByMethodName}", metaDataCalledByMethodName);
            outputMistakeBody = outputMistakeBody.replace("{calledByMethodReason}", metaDataCalledByMethodReason);

            outputMistakeBody = outputMistakeBody.replace("{details}", mistakeDetailsTemplate);

            return outputMistakeBody;
        }

        public static Step_X_X_Create_An_ObservationJsonNode_1_0(metaDataCalledByEntryPointName: string, metaDataCalledByMethodName: string, metaDataCalledByMethodReason: string, presentationTemplate: string, businessTemplate: string, serviceTemplate: string, securityTemplate: string, dataTemplate: string): String {
            let outputObservationBody: string = '{"baseDIObservations": [{ "observation": { "metadata": [{ "calledByEntryPointName": "{calledByEntryPointName}" }, { "calledByMethodName": "{calledByMethodName}" }, { "calledByMethodReason": "{calledByMethodReason}" }, { "item": {{item}}  }]  } }]}';
            let outputObservationItem: string = '"presentation": [{presentation}], "business": [{business}], "service": [{service}],  "security": [{security}],"data": [{data}]';
            outputObservationBody = outputObservationBody.replace("{item}", outputObservationItem);
           
            outputObservationBody = outputObservationBody.replace("{calledByEntryPointName}", metaDataCalledByEntryPointName);
            outputObservationBody = outputObservationBody.replace("{calledByMethodName}", metaDataCalledByMethodName);
            outputObservationBody = outputObservationBody.replace("{calledByMethodReason}", metaDataCalledByMethodReason);

            outputObservationBody = outputObservationBody.replace("{presentation}", presentationTemplate);
            outputObservationBody = outputObservationBody.replace("{business}", businessTemplate);
            outputObservationBody = outputObservationBody.replace("{service}", serviceTemplate);
            outputObservationBody = outputObservationBody.replace("{security}", securityTemplate);
            outputObservationBody = outputObservationBody.replace("{data}", dataTemplate);
            return outputObservationBody;
        }
        //#endregion

        //#region READ
        public static Step_X_X_Read_And_FindJSONNode(data: object, keyName: string, keyValue: any, returnAsArray: boolean): any {
            //EXAMPLE AT https://stackoverflow.com/questions/22222599/javascript-recursive-search-in-json-object

            if (data == null)
                data = this;

            let returnObject: any = null;
            let returnValue: any = null;

            let searchFilter: string = '**';

            if (keyName)
                searchFilter = '**.' + keyName;

            objectScan([searchFilter],
                {
                    filterFn: (key, value, { parents }) => {
                        if (keyValue) {
                            if (value === keyValue) {
                                returnObject = parents[0];
                            }
                        }
                        else {
                            returnObject = parents[0];
                        }

                    },
                    breakFn: () => returnObject !== null
                })(data);

            returnValue = returnObject;

            if (returnAsArray && returnObject)
                returnValue = Object.entries(returnObject);

            return returnValue;
        }

        public static Step_X_X_Read_And_FindValueInDataSet_2_Levels_1_0(dataSet: any, dataSetKey: any, dataSetKeyValue: any) {

            let response: any = null;

            if (dataSet)
            {
                //LEVEL 1-1 - SEARCH
                const result = dataSet.values_1_1.map(treeValue_1_1 =>
                {
                    //LEVEL 1-1 - VERIFY
                    if (treeValue_1_1.key_1_2.includes(dataSetKey) && !response)
                    {
                        //LEVEL 1-1 - VERIFY
                        if (treeValue_1_1.values_1_2 &&
                            treeValue_1_1.values_1_2.length > 0 && !response)
                        {
                            //LEVEL 1-2 - SEARCH
                            treeValue_1_1.values_1_2.map(treeValue_1_2 =>
                            {
                                //LEVEL 1-2 - VERIFY
                                if (treeValue_1_2.hasOwnProperty(dataSetKeyValue))
                                {
                                    //LEVEL 1-2 - RETURN
                                    response = treeValue_1_2[dataSetKeyValue];

                                    return;
                                }
                            });
                        }
                    };
                })
            }

            return response;
        }

        public static Step_X_X_Read_And_FindValueInDataSet_3_Levels_1_0(dataSet: any, dataSetKey: any, dataSetKeyValue: any)
        {
            let response: any = null;

            if (dataSet)
            {
                //LEVEL 1-1 - SEARCH
                const result = dataSet.values_1_1.map(treeValue_1_1 =>
                {
                    //LEVEL 1-1 - VERIFY
                    if (treeValue_1_1.key_1_2.includes(dataSetKey) && !response)
                    {
                        //LEVEL 1-1 - VERIFY
                        if (treeValue_1_1.values_1_2 &&
                            treeValue_1_1.values_1_2.length > 0 && !response)
                        {
                            //LEVEL 1-2 - SEARCH
                            return treeValue_1_1.values_1_2.map(treeValue_1_2 =>
                            {
                                //LEVEL 1-2 - VERIFY
                                if (treeValue_1_2.hasOwnProperty(dataSetKeyValue))
                                {
                                    //LEVEL 1-2 - VERIFY
                                    if (treeValue_1_2[dataSetKeyValue].length > 0)
                                    {
                                        //LEVEL 1-3 - SEARCH
                                        treeValue_1_2[dataSetKeyValue].map(treeValue_1_3 =>
                                        {
                                            //LEVEL 1-3 - RETURN
                                            response = Object.values(treeValue_1_3);

                                            return;
                                        })
                                    }
                                }
                            });
                        }
                    };
                })
            }

            return response;
        }

        public static Step_X_X_Read_And_FindValueInDataSet_3_Levels_2_0(dataSet: any, dataSetKey: any, dataSetKeyValue: any) 
        {
            const memorizedValues: Array<Object> = new Array<Object>();

            if (dataSet)
            {
                //LEVEL 1-1 - SEARCH
                const result = dataSet.values_1_1.map(treeValue_1_1 =>
                {
                    //LEVEL 1-1 - VERIFY
                    if (treeValue_1_1.key_1_2.includes(dataSetKey)) 
                    {
                        //LEVEL 1-1 - VERIFY
                        if (treeValue_1_1.values_1_2 &&
                            treeValue_1_1.values_1_2.length > 0) 
                        {
                            //LEVEL 1-2 - SEARCH
                            return treeValue_1_1.values_1_2.map(treeValue_1_2 => 
                            {
                                //LEVEL 1-2 - VERIFY
                                if (treeValue_1_2.hasOwnProperty(dataSetKeyValue)) 
                                {
                                    //LEVEL 1-2 - VERIFY
                                    if (treeValue_1_2[dataSetKeyValue].length > 0) 
                                    {
                                        //LEVEL 1-3 - SEARCH
                                        treeValue_1_2[dataSetKeyValue].map(treeValue_1_3 => 
                                        {
                                            memorizedValues.push(treeValue_1_3);
                                        })

                                        //LEVEL 1-3 - RETURN
                                        return memorizedValues;
                                    }
                                }
                            });
                        }
                    };
                })
            }

            return memorizedValues;
        }

        public static Step_X_X_Read_And_FindValueInDataSet_5_Levels_1_0(dataSet: any, key_1: any, key_2_1: any, key_2_2_1: any, dataSetKeyValue: any) {
            let response: any = null;



            return response;
        }

        public static Step_X_X_Read_The_DataRespository_1_0(data: object, parseExceptionRepository: boolean, isParameterJSON: boolean): string {
            //region CHECK DATA EXIST
            let repository: any;
            let repositoryType: string = "";

            try {
                if (String(this) == null)
                    throw ("MISSING JSON INSTRUCTIONS.");

                //region CHECK RESOURCE DATA
                //region CHECK CLIENT DATA
                //region CHECK DEFAULT DATA
                repository = this.Step_X_X_Read_And_FindJSONNode(data, "key", "Repository", false);

                if (repository)
                    return repository.values[0].value[0].key.dataAccess;

                return repository;
            }
            catch (ex) {
                throw ex;
            }
        }
        //#endregion

        //#region UPDATE
        //#endregion

        //#region DELETE
        //#endregion
    }
}