"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (mistake) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (mistake) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (mistake) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var aClass_Programming_ScriptMasterLeader_12_2_1_0 = require("../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptMasterLeader_12_2_1_0");
var aClass_Programming_ScriptAction_12_2_1_0 = require("../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0");
var ExtraData_12_2_1_0 = require("../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0");
var ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 = require("../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingFactoryImplementer_NicheMaster_12_2_1_0");
var BaseDI;
(function (BaseDI) {
    var ProtoType;
    (function (ProtoType) {
        var UnitTest;
        (function (UnitTest) {
            var Story;
            (function (Story) {
                var Programming_1;
                (function (Programming_1) {
                    var ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 = /** @class */ (function (_super) {
                        __extends(ProgrammingStudioAdministrator_MasterLeader_12_2_1_0, _super);
                        //region 2. Ready
                        function ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(storyRequestType) {
                            var _this = _super.call(this) || this;
                            _this.storyRequestType = storyRequestType;
                            //region 1. Assign
                            _this._requestInspector = new _this.storyRequestType();
                            _this.HandleStoryDefaults = _this.HandleStoryDefaults.bind(_this);
                            return _this;
                            //region 2. Action
                            //region 3. Observe
                        }
                        //region 3. Set
                        ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.prototype.HandleStoryDefaults = function () {
                            this._extraData = new ExtraData_12_2_1_0.BaseDI.Professional.Programming_.ExtraData_12_2_1_0();
                            this._extraData.MasterLeader = this;
                        };
                        //region 4. Action
                        ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.prototype.SetupStoryline = function (storylineDetails, storylineDetails_Parameters, extraData, requestToResolveName) {
                            return __awaiter(this, void 0, void 0, function () {
                                var director_Of_Programming_Chapter_12_2_Page_1_Request_Handler, directorOrExperienceResolveBuilder, e_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = null;
                                            if (extraData != null)
                                                this._extraData = extraData;
                                            directorOrExperienceResolveBuilder = new Use_DesignPattern_Builder_Chapter_12_2_1_0(storylineDetails, storylineDetails_Parameters, this._requestInspector, this._extraData, requestToResolveName);
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, directorOrExperienceResolveBuilder.Action()];
                                        case 2:
                                            //region BEGIN ENTRYPOINT DISCOVERY
                                            director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = _a.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_1 = _a.sent();
                                            return [3 /*break*/, 4];
                                        case 4: 
                                        //region RETURN REQUEST HANDLER
                                        return [2 /*return*/, null];
                                    }
                                });
                            });
                        };
                        return ProgrammingStudioAdministrator_MasterLeader_12_2_1_0;
                    }(aClass_Programming_ScriptMasterLeader_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptMasterLeader_12_2_1_0));
                    Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 = ProgrammingStudioAdministrator_MasterLeader_12_2_1_0;
                    //region 5. Action Script
                    var Use_DesignPattern_Builder_Chapter_12_2_1_0 = /** @class */ (function () {
                        function Use_DesignPattern_Builder_Chapter_12_2_1_0(storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString) {
                            this._storylineDetails = storylineDetails;
                            this._storylineDetails_Parameters = storylineDetails_Parameters;
                            this._requestToResolveObject = requestToResolveObject;
                            this._requestToResolveString = requestToResolveString;
                            this._extraData = extraData;
                            this.Action = this.Action.bind(this);
                        }
                        //region 2. Ready
                        //region 3. Set
                        //region 4. Action
                        Use_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var builder, resolvedRequest;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            builder = new Implement_DesignPattern_Builder_Chapter_12_2_1_0(this._storylineDetails, this._storylineDetails_Parameters, this._requestToResolveObject, this._extraData, this._requestToResolveString);
                                            return [4 /*yield*/, builder.Action_1_Begin_Process()];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_10_End_Process()];
                                        case 2:
                                            resolvedRequest = _a.sent();
                                            return [2 /*return*/, resolvedRequest];
                                    }
                                });
                            });
                        };
                        return Use_DesignPattern_Builder_Chapter_12_2_1_0;
                    }());
                    Programming_1.Use_DesignPattern_Builder_Chapter_12_2_1_0 = Use_DesignPattern_Builder_Chapter_12_2_1_0;
                    //region 6. Action Implementation
                    var Implement_DesignPattern_Builder_Chapter_12_2_1_0 = /** @class */ (function (_super) {
                        __extends(Implement_DesignPattern_Builder_Chapter_12_2_1_0, _super);
                        //region 2. Ready
                        function Implement_DesignPattern_Builder_Chapter_12_2_1_0(storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString) {
                            var _this = _super.call(this) || this;
                            _this._storylineDetails = storylineDetails;
                            _this._storylineDetails_Parameters = storylineDetails_Parameters;
                            _this._requestToResolveObject = requestToResolveObject;
                            _this._requestToResolveString = requestToResolveString;
                            _this._extraData = extraData;
                            _this.Action_1_Begin_Process = _this.Action_1_Begin_Process.bind(_this);
                            _this.Action_2_Validate_Process = _this.Action_2_Validate_Process.bind(_this);
                            _this.Action_3_Process_StoryAuthor = _this.Action_3_Process_StoryAuthor.bind(_this);
                            _this.Action_4_Process_StoryCharacters = _this.Action_4_Process_StoryCharacters.bind(_this);
                            _this.Action_5_Process_StorySetting = _this.Action_5_Process_StorySetting.bind(_this);
                            _this.Action_6_Process_StoryExperiences = _this.Action_6_Process_StoryExperiences.bind(_this);
                            _this.Action_7_Process_StoryResources = _this.Action_7_Process_StoryResources.bind(_this);
                            _this.Action_8_Process_CRUD = _this.Action_8_Process_CRUD.bind(_this);
                            _this.Action_9_Verify_Process = _this.Action_9_Verify_Process.bind(_this);
                            _this.Action_10_End_Process = _this.Action_10_End_Process.bind(_this);
                            return _this;
                        }
                        //region 3. Set
                        //region 4. Action
                        //Page 1-1
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_1_Begin_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    //region DETERMINE LOGIC WORKER
                                    if (this._requestToResolveObject != null) {
                                        this._requestName = this._requestToResolveObject.constructor.name;
                                    }
                                    else {
                                        this._requestName = this._requestToResolveString;
                                    }
                                    return [2 /*return*/, this._requestToResolveObject];
                                });
                            });
                        };
                        //Page 1-10
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_10_End_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var pickDirector, pickExperience;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!this._requestName.toUpperCase().includes("DIRECTOR_OF_")) return [3 /*break*/, 2];
                                            pickDirector = new Implement_DesignPattern_Factory_Director_12_2_1_0(this._storylineDetails, this._storylineDetails_Parameters, this._requestToResolveObject, this._extraData, this._requestName);
                                            return [4 /*yield*/, pickDirector.Action_1_Begin_Process()];
                                        case 1: return [2 /*return*/, _a.sent()];
                                        case 2:
                                            if (!this._requestName.toUpperCase().includes("EXPERIENCE_THE_")) return [3 /*break*/, 4];
                                            pickExperience = new Implement_DesignPattern_Factory_Experience_12_2_1_0(this._storylineDetails, this._storylineDetails_Parameters, this._requestToResolveObject, this._extraData, this._requestName);
                                            return [4 /*yield*/, pickExperience.Action_1_Begin_Process()];
                                        case 3: return [2 /*return*/, _a.sent()];
                                        case 4: return [2 /*return*/, this._storylineDetails];
                                    }
                                });
                            });
                        };
                        //region NOT APART OF THE REQUEST PIPELINE AT THIS TIME
                        //Page 1-2
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_2_Validate_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-3
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_3_Process_StoryAuthor = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-4
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_4_Process_StoryCharacters = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-5
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_5_Process_StorySetting = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-6
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_6_Process_StoryExperiences = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-7
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_7_Process_StoryResources = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-8
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_8_Process_CRUD = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-9
                        Implement_DesignPattern_Builder_Chapter_12_2_1_0.prototype.Action_9_Verify_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        return Implement_DesignPattern_Builder_Chapter_12_2_1_0;
                    }(aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0));
                    Programming_1.Implement_DesignPattern_Builder_Chapter_12_2_1_0 = Implement_DesignPattern_Builder_Chapter_12_2_1_0;
                    //region RETURN DIRECTOR WORKER
                    var Implement_DesignPattern_Factory_Director_12_2_1_0 = /** @class */ (function (_super) {
                        __extends(Implement_DesignPattern_Factory_Director_12_2_1_0, _super);
                        //region 2. Ready
                        function Implement_DesignPattern_Factory_Director_12_2_1_0(storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString) {
                            var _this = _super.call(this) || this;
                            _this._storylineDetails = storylineDetails;
                            _this._storylineDetails_Parameters = storylineDetails_Parameters;
                            _this._requestToResolveObject = requestToResolveObject;
                            _this._requestToResolveString = requestToResolveString;
                            _this._extraData = extraData;
                            _this.Action_1_Begin_Process = _this.Action_1_Begin_Process.bind(_this);
                            _this.Action_2_Validate_Process = _this.Action_2_Validate_Process.bind(_this);
                            _this.Action_3_Process_StoryAuthor = _this.Action_3_Process_StoryAuthor.bind(_this);
                            _this.Action_4_Process_StoryCharacters = _this.Action_4_Process_StoryCharacters.bind(_this);
                            _this.Action_5_Process_StorySetting = _this.Action_5_Process_StorySetting.bind(_this);
                            _this.Action_6_Process_StoryExperiences = _this.Action_6_Process_StoryExperiences.bind(_this);
                            _this.Action_7_Process_StoryResources = _this.Action_7_Process_StoryResources.bind(_this);
                            _this.Action_8_Process_CRUD = _this.Action_8_Process_CRUD.bind(_this);
                            _this.Action_9_Verify_Process = _this.Action_9_Verify_Process.bind(_this);
                            _this.Action_10_End_Process = _this.Action_10_End_Process.bind(_this);
                            return _this;
                        }
                        //region 3. Set
                        //region 4. Action
                        //Page 1-1
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_1_Begin_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var createDirector;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_PROGRAMMING")) return [3 /*break*/, 2];
                                            createDirector = new ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.BaseDI.Professional.Story.Risk_Management_.ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(this._extraData);
                                            createDirector.APILocationLocalDotNetCore = "http://localhost:9912/api/basedi/io/programming";
                                            createDirector.APILocationRemote = "https://api.BaseDI.Professional.io/programming";
                                            return [4 /*yield*/, createDirector.Action(this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                        case 2: return [2 /*return*/, this._storylineDetails];
                                    }
                                });
                            });
                        };
                        //region NOT APART OF THE REQUEST PIPELINE AT THIS TIME
                        //Page 1-2
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_2_Validate_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-3
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_3_Process_StoryAuthor = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-4
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_4_Process_StoryCharacters = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-5
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_5_Process_StorySetting = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-6
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_6_Process_StoryExperiences = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-7
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_7_Process_StoryResources = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-8
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_8_Process_CRUD = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-9
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_9_Verify_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-10
                        Implement_DesignPattern_Factory_Director_12_2_1_0.prototype.Action_10_End_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        return Implement_DesignPattern_Factory_Director_12_2_1_0;
                    }(aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0));
                    Programming_1.Implement_DesignPattern_Factory_Director_12_2_1_0 = Implement_DesignPattern_Factory_Director_12_2_1_0;
                    //region RETURN EXPERIENCE WORKER
                    var Implement_DesignPattern_Factory_Experience_12_2_1_0 = /** @class */ (function (_super) {
                        __extends(Implement_DesignPattern_Factory_Experience_12_2_1_0, _super);
                        //region 2. Ready
                        function Implement_DesignPattern_Factory_Experience_12_2_1_0(storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString) {
                            var _this = _super.call(this) || this;
                            _this._storylineDetails = storylineDetails;
                            _this._storylineDetails_Parameters = storylineDetails_Parameters;
                            _this._requestToResolveObject = requestToResolveObject;
                            _this._requestToResolveString = requestToResolveString;
                            _this._extraData = extraData;
                            _this.Action_1_Begin_Process = _this.Action_1_Begin_Process.bind(_this);
                            _this.Action_2_Validate_Process = _this.Action_2_Validate_Process.bind(_this);
                            _this.Action_3_Process_StoryAuthor = _this.Action_3_Process_StoryAuthor.bind(_this);
                            _this.Action_4_Process_StoryCharacters = _this.Action_4_Process_StoryCharacters.bind(_this);
                            _this.Action_5_Process_StorySetting = _this.Action_5_Process_StorySetting.bind(_this);
                            _this.Action_6_Process_StoryExperiences = _this.Action_6_Process_StoryExperiences.bind(_this);
                            _this.Action_7_Process_StoryResources = _this.Action_7_Process_StoryResources.bind(_this);
                            _this.Action_8_Process_CRUD = _this.Action_8_Process_CRUD.bind(_this);
                            _this.Action_9_Verify_Process = _this.Action_9_Verify_Process.bind(_this);
                            _this.Action_10_End_Process = _this.Action_10_End_Process.bind(_this);
                            return _this;
                        }
                        //region 3. Set
                        //region 4. Action
                        //Page 1-1
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_1_Begin_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-2
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_2_Validate_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-3
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_3_Process_StoryAuthor = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-4
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_4_Process_StoryCharacters = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-5
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_5_Process_StorySetting = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-6
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_6_Process_StoryExperiences = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-7
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_7_Process_StoryResources = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-8
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_8_Process_CRUD = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-9
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_9_Verify_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-10
                        Implement_DesignPattern_Factory_Experience_12_2_1_0.prototype.Action_10_End_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        return Implement_DesignPattern_Factory_Experience_12_2_1_0;
                    }(aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0));
                    Programming_1.Implement_DesignPattern_Factory_Experience_12_2_1_0 = Implement_DesignPattern_Factory_Experience_12_2_1_0;
                })(Programming_1 = Story.Programming_1 || (Story.Programming_1 = {}));
            })(Story = UnitTest.Story || (UnitTest.Story = {}));
        })(UnitTest = ProtoType.UnitTest || (ProtoType.UnitTest = {}));
    })(ProtoType = BaseDI.Professional.ProtoType || (BaseDI.Professional.ProtoType = {}));
})(BaseDI = exports.BaseDI || (exports.BaseDI = {}));
//# sourceMappingURL=ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.js.map