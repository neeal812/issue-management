"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const issue_controller_1 = require("./issue.controller");
const issue_service_1 = require("./issue.service");
const issue_model_1 = require("./issue.model");
let IssueModule = class IssueModule {
};
IssueModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Issue', schema: issue_model_1.IssueSchema }])],
        controllers: [issue_controller_1.IssueController],
        providers: [issue_service_1.IssueService],
    })
], IssueModule);
exports.IssueModule = IssueModule;
//# sourceMappingURL=issue.module.js.map