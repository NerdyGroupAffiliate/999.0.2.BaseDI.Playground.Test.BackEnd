"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseDI;
(function (BaseDI) {
    var ProtoType;
    (function (ProtoType) {
        var UnitTest;
        (function (UnitTest) {
            var Script;
            (function (Script) {
                var Programming;
                (function (Programming) {
                    var Extensions_;
                    (function (Extensions_) {
                        var eMethods_Programming_JSON_12_2_1_0 = /** @class */ (function () {
                            function eMethods_Programming_JSON_12_2_1_0() {
                                String.prototype.Extension_Create_JSON_Node_MistakeTemplate_1_0 = this.Extension_Create_JSON_Node_MistakeTemplate_1_0;
                                String.prototype.Extension_Create_JSON_Node_ObservationTemplate_1_0 = this.Extension_Create_JSON_Node_ObservationTemplate_1_0;
                                String.prototype.Extension_Output_JSON_Nodes_1_0 = this.Extension_Output_JSON_Nodes_1_0;
                            }
                            //region CREATE SOMETHING METHODS
                            eMethods_Programming_JSON_12_2_1_0.prototype.Extension_Create_JSON_Node_MistakeTemplate_1_0 = function (metaDataCalledByEntryPointName, metaDataCalledByMethodName, metaDataCalledByMethodReason, mistakeDetailsTemplate) {
                                var outputMistakeBody = "{'baseDIMistakes': [{ 'mistake': { 'metadata': [{ 'calledByEntryPointName': '{calledByEntryPointName}' }, { 'calledByMethodName': '{calledByMethodName}' }, { 'calledByMethodReason': '{calledByMethodReason}' }, { 'item': {{ item }} }] }}]}";
                                var outputMistakeItem = "'details': [{details}]";
                                outputMistakeBody = outputMistakeBody.replace("{item}", outputMistakeItem);
                                outputMistakeBody = outputMistakeBody.replace("{calledByEntryPointName}", metaDataCalledByEntryPointName);
                                outputMistakeBody = outputMistakeBody.replace("{calledByMethodName}", metaDataCalledByMethodName);
                                outputMistakeBody = outputMistakeBody.replace("{calledByMethodReason}", metaDataCalledByMethodReason);
                                outputMistakeBody = outputMistakeBody.replace("{details}", mistakeDetailsTemplate);
                                return outputMistakeBody;
                            };
                            eMethods_Programming_JSON_12_2_1_0.prototype.Extension_Create_JSON_Node_ObservationTemplate_1_0 = function (metaDataCalledByEntryPointName, metaDataCalledByMethodName, metaDataCalledByMethodReason, presentationTemplate, businessTemplate, serviceTemplate, securityTemplate, dataTemplate) {
                                var outputObservationBody = "{'baseDIObservations': [{ 'observation': { 'metadata': [{ 'calledByEntryPointName': '{calledByEntryPointName}' }, { 'calledByMethodName': '{calledByMethodName}' }, { 'calledByMethodReason': '{calledByMethodReason}' }, { 'item': {{ item }}  }]  } }]}";
                                var outputObservationItem = "'presentation': [{presentation}], 'business': [{ business }], 'service': [{ service }],  'security': [{ security }],'data': [{ data }]";
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
                            };
                            //region READ SOMETHING METHODS
                            eMethods_Programming_JSON_12_2_1_0.prototype.Extension_Output_JSON_Nodes_1_0 = function (name) {
                                //this.Extension_Output_JSON_Nodes_1_1(name,)
                                return null;
                            };
                            return eMethods_Programming_JSON_12_2_1_0;
                        }());
                        Extensions_.eMethods_Programming_JSON_12_2_1_0 = eMethods_Programming_JSON_12_2_1_0;
                    })(Extensions_ = Programming.Extensions_ || (Programming.Extensions_ = {}));
                })(Programming = Script.Programming || (Script.Programming = {}));
            })(Script = UnitTest.Script || (UnitTest.Script = {}));
        })(UnitTest = ProtoType.UnitTest || (ProtoType.UnitTest = {}));
    })(ProtoType = BaseDI.Professional.ProtoType || (BaseDI.Professional.ProtoType = {}));
})(BaseDI = exports.BaseDI || (exports.BaseDI = {}));
//# sourceMappingURL=eMethods_Programming_JSON_12_2_1_0.js.map