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
var aClass_Programming_ScriptNicheMaster_12_2_1_0 = require("../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0");
var LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0 = require("../../../../../../../../6. State/11/Automate Manual Task/1/Risk Management/Repository/1/1_0/LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0");
var LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0 = require("../../../../../../../../6. State/11/Automate Manual Task/1/Risk Management/Repository/2/1_0/LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0");
var RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0 = require("../../../../../../../../6. State/11/Automate Manual Task/1/Risk Management/Repository/1/1_0/RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0");
var RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0 = require("../../../../../../../../6. State/11/Automate Manual Task/1/Risk Management/Repository/2/1_0/RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0");
var Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0 = require("../../../../../../../../7. Director/11/Automate Manual Task/1/Risk Management/Director/1/1_0/Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0");
var Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0 = require("../../../../../../../../7. Director/11/Automate Manual Task/1/Risk Management/Director/2/1_0/Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0");
var BaseDI;
(function (BaseDI) {
    var ProtoType;
    (function (ProtoType) {
        var UnitTest;
        (function (UnitTest) {
            var Story;
            (function (Story) {
                var Risk_Management_;
                (function (Risk_Management_) {
                    var RiskManagementFactoryTester_NicheMaster_11_1_1_0 = /** @class */ (function (_super) {
                        __extends(RiskManagementFactoryTester_NicheMaster_11_1_1_0, _super);
                        //region 2. Ready
                        function RiskManagementFactoryTester_NicheMaster_11_1_1_0(extraData) {
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
                        RiskManagementFactoryTester_NicheMaster_11_1_1_0.prototype.Action = function (requestToResolve, storylineDetails, storylineDetails_Parameters, requestName) {
                            return __awaiter(this, void 0, void 0, function () {
                                var requestType, resolvedRequest, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            requestType = requestToResolve;
                                            _a = requestName.toUpperCase();
                                            switch (_a) {
                                                case "Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0": return [3 /*break*/, 1];
                                                case "Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0": return [3 /*break*/, 3];
                                            }
                                            return [3 /*break*/, 5];
                                        case 1: return [4 /*yield*/, this.Create_Director_Of_RiskManagement_Chapter_11_1_Page_1_ReadAndHandleMistakes_1_0(storylineDetails, storylineDetails_Parameters, this._extraData)];
                                        case 2:
                                            resolvedRequest = _b.sent();
                                            return [2 /*return*/, resolvedRequest];
                                        case 3: return [4 /*yield*/, this.Create_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData)];
                                        case 4:
                                            resolvedRequest = _b.sent();
                                            return [2 /*return*/, resolvedRequest];
                                        case 5: return [2 /*return*/, resolvedRequest];
                                    }
                                });
                            });
                        };
                        //region Page 1
                        RiskManagementFactoryTester_NicheMaster_11_1_1_0.prototype.Create_Director_Of_RiskManagement_Chapter_11_1_Page_1_ReadAndHandleMistakes_1_0 = function (storylineDetails, storylineDetails_Parameters, extraData) {
                            return __awaiter(this, void 0, void 0, function () {
                                var repositoryType, director, localFile, remoteService;
                                return __generator(this, function (_a) {
                                    repositoryType = storylineDetails.Extension_Try_Read_RepositoryType(false, true);
                                    director = new Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0.BaseDI.Professional.Director.Risk_Management_1.Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0(extraData);
                                    director.StorylineDetails = storylineDetails;
                                    director.StorylineDetails_Parameters = storylineDetails_Parameters;
                                    director.ExtraData = extraData;
                                    //region ASSIGN LOGIC REPOSITORY
                                    switch (repositoryType.toUpperCase()) {
                                        case "LOCAL_FILE":
                                            localFile = new LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0.BaseDI.Professional.State.Risk_Management_.LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0(storylineDetails);
                                            director.Repository = localFile;
                                            break;
                                        case "REMOTE_SERVICE":
                                            remoteService = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0.BaseDI.Professional.State.Risk_Management_.RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0(storylineDetails);
                                            director.Repository = remoteService;
                                            break;
                                    }
                                    return [2 /*return*/, director];
                                });
                            });
                        };
                        //region Page 2
                        RiskManagementFactoryTester_NicheMaster_11_1_1_0.prototype.Create_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0 = function (storylineDetails, storylineDetails_Parameters, extraData) {
                            return __awaiter(this, void 0, void 0, function () {
                                var repositoryType, director, localFile, remoteService;
                                return __generator(this, function (_a) {
                                    repositoryType = storylineDetails.Extension_Try_Read_RepositoryType(false, true);
                                    director = new Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0.BaseDI.Professional.Director.Risk_Management_2.Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0(extraData);
                                    director.StorylineDetails = storylineDetails;
                                    director.StorylineDetails_Parameters = storylineDetails_Parameters;
                                    director.ExtraData = extraData;
                                    //region ASSIGN LOGIC REPOSITORY
                                    switch (repositoryType.toUpperCase()) {
                                        case "LOCAL_FILE":
                                            localFile = new LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0.BaseDI.Professional.State.Risk_Management_.LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0(storylineDetails);
                                            director.Repository = localFile;
                                            break;
                                        case "REMOTE_SERVICE":
                                            remoteService = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0.BaseDI.Professional.State.Risk_Management_.RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_2_Storage_Handler_1_0(storylineDetails);
                                            director.Repository = remoteService;
                                            break;
                                    }
                                    return [2 /*return*/, director];
                                });
                            });
                        };
                        return RiskManagementFactoryTester_NicheMaster_11_1_1_0;
                    }(aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0));
                    Risk_Management_.RiskManagementFactoryTester_NicheMaster_11_1_1_0 = RiskManagementFactoryTester_NicheMaster_11_1_1_0;
                })(Risk_Management_ = Story.Risk_Management_ || (Story.Risk_Management_ = {}));
            })(Story = UnitTest.Story || (UnitTest.Story = {}));
        })(UnitTest = ProtoType.UnitTest || (ProtoType.UnitTest = {}));
    })(ProtoType = BaseDI.Professional.ProtoType || (BaseDI.Professional.ProtoType = {}));
})(BaseDI = exports.BaseDI || (exports.BaseDI = {}));
//# sourceMappingURL=RiskManagementFactoryTester_NicheMaster_11_1_1_0.js.map