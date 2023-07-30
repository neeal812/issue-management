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
exports.IssueService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let IssueService = class IssueService {
    constructor(issueModel) {
        this.issueModel = issueModel;
    }
    async findById(id) {
        return this.issueModel.findById(id).exec();
    }
    async findOne(id) {
        return this.issueModel.findById(id).exec();
    }
    async create(issue) {
        const createdIssue = new this.issueModel(issue);
        return createdIssue.save();
    }
    async assign(id, assignedTo) {
        const issue = await this.issueModel.findById(id).exec();
        if (!issue) {
            throw new common_1.NotFoundException('Issue not found');
        }
        issue.assignedBy = "dinesh";
        issue.assignedDateTime = new Date();
        return issue.save();
    }
    async resolve(id, resolveTo) {
        const issue = await this.issueModel.findById(id).exec();
        if (!issue) {
            throw new common_1.NotFoundException('Issue not found');
        }
        issue.resolvedBy = resolveTo;
        issue.resolvedDateTime = new Date();
        return issue.save();
    }
    async deleteIssue(id) {
        const result = await this.issueModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Issue with ID ${id} not found`);
        }
    }
    async getIssuesByPriority(priority) {
        return this.issueModel.find({ priority }).sort({ createdAt: -1 }).exec();
    }
    async createIssue(issue) {
        const existingIssue = await this.issueModel.findOne({ title: issue.title }).exec();
        if (existingIssue) {
            throw new common_1.BadRequestException(`An issue with the title '${issue.title}' already exists`);
        }
        const createdIssue = await this.issueModel.create(issue);
        return createdIssue.toObject();
    }
    async updateIssue(id, fields) {
        const issue = await this.issueModel.findOne({ _id: id }).exec();
        if (!issue) {
            throw new common_1.NotFoundException(`Issue with ID "${id}" not found`);
        }
        Object.assign(issue, fields);
        const updatedIssue = await issue.save();
        return updatedIssue;
    }
    async getByParams(fields) {
        const query = {};
        for (const key in fields) {
            if (fields[key]) {
                query[key] = fields[key];
            }
        }
        const issues = await this.issueModel.find(query).exec();
        return issues;
    }
};
IssueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Issue')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], IssueService);
exports.IssueService = IssueService;
//# sourceMappingURL=issue.service.js.map