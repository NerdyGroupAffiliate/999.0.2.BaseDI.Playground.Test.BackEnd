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
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
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
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 = require("../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0");
var aClass_Programming_ScriptAction_12_2_1_0 = require("../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0");
var BaseDI;
(function (BaseDI) {
    var ProtoType;
    (function (ProtoType) {
        var UnitTest;
        (function (UnitTest) {
            var Director;
            (function (Director) {
                var Advertising_1;
                (function (Advertising_1) {
                    var Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0 = /** @class */ (function (_super) {
                        __extends(Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0, _super);
                        //region 2. Ready
                        function Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0(extraData) {
                            var _this = _super.call(this) || this;
                            //region 1. Assign
                            _this._extraData = null;
                            //region 1. Assign
                            _this._extraData = extraData;
                            _this.Action = _this.Action.bind(_this);
                            return _this;
                            //region 2. Action
                            //region 3. Observe
                        }
                        //region 3. Set
                        //region 4. Action
                        Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0.prototype.Action = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var designPattern;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            designPattern = new Use_DesignPattern_Builder_Chapter_1_1_Page_1(this.StorylineDetails, this.StorylineDetails_Parameters, this.Repository, this.ExtraData, this.EntryPoint);
                                            //region 2. Action
                                            return [4 /*yield*/, designPattern.Action()];
                                        case 1:
                                            //region 2. Action
                                            _a.sent();
                                            //region 3. Observe
                                            return [2 /*return*/, this.StorylineDetails];
                                    }
                                });
                            });
                        };
                        return Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0;
                    }(aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0));
                    Advertising_1.Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0 = Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0;
                    //region 5. Action Script
                    var Use_DesignPattern_Builder_Chapter_1_1_Page_1 = /** @class */ (function () {
                        function Use_DesignPattern_Builder_Chapter_1_1_Page_1(storylineDetails, _storylineDetails_Parameters, repository, extraData, entryPoint) {
                            this._storylineDetails = storylineDetails;
                            this._storylineDetails_Parameters = _storylineDetails_Parameters;
                            this._repository = repository;
                            this._extraData = extraData;
                            this._entryPoint = entryPoint;
                            this.Action = this.Action.bind(this);
                        }
                        //region 2. Ready
                        //region 3. Set
                        //region 4. Action
                        Use_DesignPattern_Builder_Chapter_1_1_Page_1.prototype.Action = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var builder;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            builder = new Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0(this._storylineDetails, this._storylineDetails_Parameters, this._repository, this._extraData, this._entryPoint);
                                            return [4 /*yield*/, builder.Action_1_Begin_Process()];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_2_Validate_Process()];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_3_Process_StoryAuthor()];
                                        case 3:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_4_Process_StoryCharacters()];
                                        case 4:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_5_Process_StorySetting()];
                                        case 5:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_6_Process_StoryExperiences()];
                                        case 6:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_7_Process_StoryResources()];
                                        case 7:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_8_Process_CRUD()];
                                        case 8:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_9_Verify_Process()];
                                        case 9:
                                            _a.sent();
                                            return [4 /*yield*/, builder.Action_10_End_Process()];
                                        case 10: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            });
                        };
                        return Use_DesignPattern_Builder_Chapter_1_1_Page_1;
                    }());
                    Advertising_1.Use_DesignPattern_Builder_Chapter_1_1_Page_1 = Use_DesignPattern_Builder_Chapter_1_1_Page_1;
                    //region 6. Action Implementation
                    var Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0 = /** @class */ (function (_super) {
                        __extends(Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0, _super);
                        //region 2. Ready
                        function Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0(storylineDetails, _storylineDetails_Parameters, repository, extraData, entryPoint) {
                            var _this = _super.call(this) || this;
                            _this._storylineDetails = storylineDetails;
                            _this._storylineDetails_Parameters = _storylineDetails_Parameters;
                            _this._repository = repository;
                            _this._extraData = extraData;
                            _this._entryPoint = entryPoint;
                            _this.HandleChapterDefaults = _this.HandleChapterDefaults.bind(_this);
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
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.HandleChapterDefaults = function () {
                        };
                        //region 4. Action
                        //Page 1-1
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_1_Begin_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-2
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_2_Validate_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-3
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_3_Process_StoryAuthor = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-4
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_4_Process_StoryCharacters = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-5
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_5_Process_StorySetting = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-6
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_6_Process_StoryExperiences = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-7
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_7_Process_StoryResources = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-8
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_8_Process_CRUD = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-9
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_9_Verify_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        //Page 1-10
                        Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0.prototype.Action_10_End_Process = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._storylineDetails];
                                });
                            });
                        };
                        return Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0;
                    }(aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0));
                    Advertising_1.Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0 = Implement_DesignPattern_Builder_Chapter_1_1_Page_1_1_0;
                })(Advertising_1 = Director.Advertising_1 || (Director.Advertising_1 = {}));
            })(Director = UnitTest.Director || (UnitTest.Director = {}));
        })(UnitTest = ProtoType.UnitTest || (ProtoType.UnitTest = {}));
    })(ProtoType = BaseDI.ProtoType || (BaseDI.ProtoType = {}));
})(BaseDI = exports.BaseDI || (exports.BaseDI = {}));
//# sourceMappingURL=Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0.js.map