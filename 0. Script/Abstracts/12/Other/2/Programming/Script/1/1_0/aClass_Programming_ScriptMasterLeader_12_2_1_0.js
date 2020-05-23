"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtraData_12_2_1_0 = require("../../../../../../../../Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0");
var eEnumerations_Programming_MasterLeader_12_2_1_0 = require("../../../../../../../../Enumerations/12/Other/2/Programming/Enumeration/1/1_0/eEnumerations_Programming_MasterLeader_12_2_1_0");
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
                    var Abstract_;
                    (function (Abstract_) {
                        var aClass_Programming_ScriptMasterLeader_12_2_1_0 = /** @class */ (function () {
                            //region 1. Assign
                            //public delegate void TriggerAutoBackUpHandler(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData);
                            //public delegate void TriggerMistakeHandler(JObject storylineDetails, JObject storylineDetails_Parameters, Exception storyLineMistake, ExtraData_12_2_1_0 extraData);
                            //public TriggerAutoBackUpHandler TriggerAutoBackUp;
                            //public TriggerMistakeHandler TriggerMistake;
                            //region 2. Ready
                            function aClass_Programming_ScriptMasterLeader_12_2_1_0() {
                                //region 1. Assign
                                //region 2. Action
                                //region 3. Observe
                            }
                            aClass_Programming_ScriptMasterLeader_12_2_1_0.prototype.Inherited_Create_Experience_Movement_TriggerAutoBackUp = function (storylineDetails, storylineDetails_Parameters, extraData) {
                                this.Inherited_Create_Experience_Movement_TriggerMasterController(this, eEnumerations_Programming_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming_.eEnumerations_Programming_MasterLeader_12_2_1_0.RunAutoBackup, storylineDetails, storylineDetails_Parameters, null, extraData);
                            };
                            aClass_Programming_ScriptMasterLeader_12_2_1_0.prototype.Inherited_Create_Experience_Movement_TriggerMistake = function (storylineDetails, storylineDetails_Parameters, storyLineMistake, extraData) {
                                this.Inherited_Create_Experience_Movement_TriggerMasterController(this, eEnumerations_Programming_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming_.eEnumerations_Programming_MasterLeader_12_2_1_0.RunMistake, storylineDetails, storylineDetails_Parameters, storyLineMistake, extraData);
                            };
                            aClass_Programming_ScriptMasterLeader_12_2_1_0.prototype.Inherited_Create_Experience_Movement_TriggerMasterController = function (masterLeaderReference, leaderJobType, storylineDetails, storylineDetails_Parameters, exceptionData, extraData) {
                                armTemplateJSONOutput: Object = null;
                                if (extraData == null)
                                    extraData = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_.ExtraData_12_2_1_0();
                                extraData.MasterLeader = masterLeaderReference;
                            };
                            return aClass_Programming_ScriptMasterLeader_12_2_1_0;
                        }());
                        Abstract_.aClass_Programming_ScriptMasterLeader_12_2_1_0 = aClass_Programming_ScriptMasterLeader_12_2_1_0;
                    })(Abstract_ = Programming.Abstract_ || (Programming.Abstract_ = {}));
                })(Programming = Script.Programming || (Script.Programming = {}));
            })(Script = UnitTest.Script || (UnitTest.Script = {}));
        })(UnitTest = ProtoType.UnitTest || (ProtoType.UnitTest = {}));
    })(ProtoType = BaseDI.ProtoType || (BaseDI.ProtoType = {}));
})(BaseDI = exports.BaseDI || (exports.BaseDI = {}));
//# sourceMappingURL=aClass_Programming_ScriptMasterLeader_12_2_1_0.js.map