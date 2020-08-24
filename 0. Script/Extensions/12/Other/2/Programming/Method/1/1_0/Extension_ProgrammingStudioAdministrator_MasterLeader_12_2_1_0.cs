using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace BaseDI.BackEnd.Script.Programming.Extensions_1
{
    public static class Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0
    {
        #region CREATE

        public static string Step_X_X_Create_A_MistakeJsonNode_1_0(string metaDataCalledByEntryPointName, string metaDataCalledByMethodName, string metaDataCalledByMethodReason, string mistakeDetailsTemplate = "{}")
        {
            string outputMistakeBody = @"{'baseDIMistakes': [{
                                                'mistake':
                                                {
                                                    'metadata': [{'calledByEntryPointName':'{calledByEntryPointName}'},{'calledByMethodName':'{calledByMethodName}'},{'calledByMethodReason':'{calledByMethodReason}'},{'item':{{item}}}]
                                                }
                                            }]
                                         }";

            string outputMistakeItem = @"'details': [{details}]";

            outputMistakeBody = outputMistakeBody.Replace("{item}", outputMistakeItem);

            outputMistakeBody = outputMistakeBody.Replace("{calledByEntryPointName}", metaDataCalledByEntryPointName);
            outputMistakeBody = outputMistakeBody.Replace("{calledByMethodName}", metaDataCalledByMethodName);
            outputMistakeBody = outputMistakeBody.Replace("{calledByMethodReason}", metaDataCalledByMethodReason);

            outputMistakeBody = outputMistakeBody.Replace("{details}", mistakeDetailsTemplate);

            return outputMistakeBody;
        }

        public static string Step_X_X_Create_An_ObservationJsonNode_1_0(string metaDataCalledByEntryPointName, string metaDataCalledByMethodName, string metaDataCalledByMethodReason, string presentationTemplate = "{}", string businessTemplate = "{}", string serviceTemplate = "{}", string securityTemplate = "{}", string dataTemplate = "{}")
        {
            string outputObservationBody = @"{'baseDIObservations': [{
                                                'observation':
                                                {
                                                    'metadata': [{'calledByEntryPointName':'{calledByEntryPointName}'},{'calledByMethodName':'{calledByMethodName}'},{'calledByMethodReason':'{calledByMethodReason}'},{'item':{{item}}}]
                                                }
                                            }]
                                         }";

            string outputObservationItem = @"'presentation': [{presentation}],
                                             'business': [{business}],
                                             'service': [{service}],
                                             'security': [{security}],
                                             'data': [{data}]";

            outputObservationBody = outputObservationBody.Replace("{item}", outputObservationItem);

            outputObservationBody = outputObservationBody.Replace("{calledByEntryPointName}", metaDataCalledByEntryPointName);
            outputObservationBody = outputObservationBody.Replace("{calledByMethodName}", metaDataCalledByMethodName);
            outputObservationBody = outputObservationBody.Replace("{calledByMethodReason}", metaDataCalledByMethodReason);

            outputObservationBody = outputObservationBody.Replace("{presentation}", presentationTemplate);
            outputObservationBody = outputObservationBody.Replace("{business}", businessTemplate);
            outputObservationBody = outputObservationBody.Replace("{service}", serviceTemplate);
            outputObservationBody = outputObservationBody.Replace("{security}", securityTemplate);
            outputObservationBody = outputObservationBody.Replace("{data}", dataTemplate);

            return outputObservationBody;
        }

        #endregion

        #region READ

        public static List<JToken> Step_X_X_Read_And_FindJSONNode_1_0(JObject data, string keyName, string keyValue, bool returnAsArray)
        {
            List<JToken> matches = new List<JToken>();

            if (data == null) return null;

            Func<JToken, Dictionary<string, string>, string, bool> Step_X_X_Read_And_FindJSONNode_1_1 = null;

            Step_X_X_Read_And_FindJSONNode_1_1 = (JToken token, Dictionary<string, string> nodes, string parentLocation) =>
            {
                if (token.HasValues)
                {
                    foreach (JToken child in token.Children())
                    {
                        if (token.Type == JTokenType.Property)
                        {
                            if (parentLocation == "")
                            {
                                parentLocation = ((JProperty)token).Name;
                            }
                            else
                            {
                                parentLocation += "." + ((JProperty)token).Name;
                            }
                        }

                        Step_X_X_Read_And_FindJSONNode_1_1(child, nodes, parentLocation);
                    }

                    // we are done parsing and this is a parent node
                    return true;
                }
                else
                {
                    // leaf of the tree
                    if(token.ToString().ToUpper(CultureInfo.CurrentCulture) == keyValue.ToUpper(CultureInfo.CurrentCulture))
                    {
                        matches.Add(token);
                    }
                    //if (nodes.ContainsKey(parentLocation))
                    //{
                    //    // this was an array
                    //    nodes[parentLocation] += "|" + token.ToString();
                    //}
                    //else
                    //{
                    //    // this was a single property
                    //    nodes.Add(parentLocation, token.ToString());
                    //}

                    return false;
                }
            };

            Step_X_X_Read_And_FindJSONNode_1_1(data, null, "");

            return matches;
        }  

        public static string Step_X_X_Read_The_DataRepository_1_0(this JObject jsonObject, bool parseExceptionRepository = false, bool isParameterJSON = false)
        {
            #region CHECK DATA EXIST

            string repositoryType = "";

            if (jsonObject == null)
                throw new Exception("MISSING JSON INSTRUCTIONS.");

            #endregion

            try
            {
                #region CHECK RESOURCE DATA

                if (!isParameterJSON)
                {
                    JToken r1 = jsonObject.SelectToken("resources[*].baseDIProfiles[*]..baseDIInstructions.data[?(@.key == 'Repository')].values[0].value[0].key.dataAccess");

                    if (r1 != null)
                    {
                        return r1.Value<string>().ToUpper();
                    }
                }

                #endregion

                #region CHECK CLIENT DATA

                if (isParameterJSON)
                {
                    JToken r2 = jsonObject.SelectToken("..value.baseDIInstructions.data[?(@.key == 'Repository')].values[0].value[0].key.dataAccess");

                    if (r2 != null)
                    {
                        return r2.Value<string>().ToUpper();
                    }
                }

                #endregion

                #region CHECK DEFAULT DATA

                if (!isParameterJSON)
                {
                    JToken r2 = jsonObject.SelectToken("..defaultValue.baseDIInstructions.data[?(@.key == 'Repository')].values[0].value[0].key.dataAccess");

                    if (r2 != null)
                    {
                        return r2.Value<string>().ToUpper();
                    }
                }

                #endregion
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return repositoryType;
        }

        #endregion

        #region UPDATE
        
        public static JObject Step_X_X_Update_The_Client_1_0(this Dictionary<string, object> clientInfo, JObject storylineDetails)
        {
            JObject result = null;

            if(clientInfo != null && clientInfo.Keys.Count > 0 && clientInfo.Keys.Contains("presentation_director"))
            {
                var client = clientInfo["presentation_director"];

                var clientFieldInfo = client?.GetType().GetField("Update_Client");

                if(clientFieldInfo != null)
                {
                    var valueOfField = clientFieldInfo.GetValue(client);

                    var customControlType = clientFieldInfo.FieldType;
                    var methodInfo = customControlType.GetMethod("Invoke");

                    try
                    {
                        result = (JObject)methodInfo.Invoke(valueOfField, new object[] { storylineDetails });
                    }
                    catch
                    {
                        return storylineDetails;
                    }
                }
            }

            return result;
        }

        #endregion

        #region DELETE

        #endregion        
    }
}
