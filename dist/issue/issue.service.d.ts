import { Model } from 'mongoose';
import { Issue } from './issue.model';
export declare class IssueService {
    private readonly issueModel;
    [x: string]: any;
    constructor(issueModel: Model<Issue>);
    findById(id: string): Promise<Issue>;
    findOne(id: string): Promise<Issue>;
    create(issue: Issue): Promise<Issue>;
    assign(id: string, assignedTo: string): Promise<Issue>;
    resolve(id: string, resolveTo: string): Promise<Issue>;
    deleteIssue(id: string): Promise<void>;
    getIssuesByPriority(priority: string): Promise<Issue[]>;
    createIssue(issue: Partial<Issue>): Promise<Issue>;
    updateIssue(id: string, fields: Partial<Issue>): Promise<Issue>;
    getByParams(fields: Partial<Issue>): Promise<Issue[]>;
}
