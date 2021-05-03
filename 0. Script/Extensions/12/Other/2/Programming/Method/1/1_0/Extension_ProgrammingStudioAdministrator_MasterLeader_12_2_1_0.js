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
                        var eMethods_Programming_Repository_12_2_1_0 = /** @class */ (function () {
                            function eMethods_Programming_Repository_12_2_1_0() {
                                String.prototype.Extension_Try_Output_RepositoryType = this.Extension_Try_Output_RepositoryType;
                            }
                            eMethods_Programming_Repository_12_2_1_0.prototype.Extension_Try_Output_RepositoryType = function (parseExceptionRepository, isParameterJSON) {
                                //region CHECK DATA EXIST
                                var repositoryType = "";
                                try {
                                    if (String(this) == null)
                                        throw ("MISSING JSON INSTRUCTIONS.");
                                    //region CHECK RESOURCE DATA
                                    if (!isParameterJSON) {
                                        //r1 = jsonObject.SelectToken("resources[*].baseDIProfiles[*]..baseDIInstructions.data[?(@.key == 'Repository')].values[0].value[0].key.dataAccess");
                                        //if (r1 != null) {
                                        //    return r1.Value<string>().ToUpper();
                                        //}
                                    }
                                    //region CHECK CLIENT DATA
                                    if (isParameterJSON) {
                                        //JToken r2 = jsonObject.SelectToken("..value.baseDIInstructions.data[?(@.key == 'Repository')].values[0].value[0].key.dataAccess");
                                        //if (r2 != null) {
                                        //    return r2.Value<string>().ToUpper();
                                        //}
                                    }
                                    //region CHECK DEFAULT DATA
                                    if (!isParameterJSON) {
                                        //JToken r2 = jsonObject.SelectToken("..defaultValue.baseDIInstructions.data[?(@.key == 'Repository')].values[0].value[0].key.dataAccess");
                                        //if (r2 != null) {
                                        //    return r2.Value<string>().ToUpper();
                                        //}
                                    }
                                }
                                catch (ex) {
                                    throw ex;
                                }
                                return repositoryType;
                            };
                            return eMethods_Programming_Repository_12_2_1_0;
                        }());
                        Extensions_.eMethods_Programming_Repository_12_2_1_0 = eMethods_Programming_Repository_12_2_1_0;
                    })(Extensions_ = Programming.Extensions_ || (Programming.Extensions_ = {}));
                })(Programming = Script.Programming || (Script.Programming = {}));
            })(Script = UnitTest.Script || (UnitTest.Script = {}));
        })(UnitTest = ProtoType.UnitTest || (ProtoType.UnitTest = {}));
    })(ProtoType = BaseDI.Professional.ProtoType || (BaseDI.Professional.ProtoType = {}));
})(BaseDI = exports.BaseDI || (exports.BaseDI = {}));
//# sourceMappingURL=eMethods_Programming_Repository_12_2_1_0.js.map