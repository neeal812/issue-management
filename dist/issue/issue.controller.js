"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const issue_service_1 = require("./issue.service");
let IssueController = class IssueController {
    constructor(issueModel, issueService) {
        this.issueModel = issueModel;
        this.issueService = issueService;
    }
    async create(issue) {
        const createdIssue = new this.issueModel(issue);
        return createdIssue.save();
    }
    async findById(id) {
        return this.issueModel.findById(id).exec();
    }
    async assign(id, assignedTo) {
        return this.issueService.assign(id, assignedTo);
    }
    async resolve(id, resolvedBy) {
        return this.issueService.resolve(id, resolvedBy);
    }
    async deleteIssue(id) {
        await this.issueService.deleteIssue(id);
    }
    async createIssue(issue) {
        const existingIssue = await this.issueModel.findOne({ title: issue.title }).exec();
        if (existingIssue) {
            throw new Error('Issue with same title already exists');
        }
        else {
            const createdIssue = new this.issueModel(issue);
            return createdIssue.save();
        }
    }
    async updateIssue(id, fields) {
        return this.issueService.updateIssue(id, fields)
            .then(updatedIssue => updatedIssue || Promise.reject(new common_1.NotFoundException(`Issue with ID "${id}" not found`)));
    }
    async getByParams(fields) {
        const issues = await this.issueService.getByParams(fields);
        return issues;
    }
};
__decorate([
    (0, common_1.Post)("/issues"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:id/assign'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('assignedTo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "assign", null);
__decorate([
    (0, common_1.Put)('/:id/resolve'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('resolvedBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "resolve", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "deleteIssue", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "createIssue", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "updateIssue", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IssueController.prototype, "getByParams", null);
IssueController = __decorate([
    (0, common_1.Controller)('issue'),
    __param(0, (0, mongoose_1.InjectModel)('Issue')),
    __metadata("design:paramtypes", [mongoose_2.Model, issue_service_1.IssueService])
], IssueController);
exports.IssueController = IssueController;
//# sourceMappingURL=issue.controller.js.map