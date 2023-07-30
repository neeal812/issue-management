import { Model } from 'mongoose';
import { Issue } from './issue.model';
import { IssueService } from './issue.service';
export declare class IssueController {
    private readonly issueModel;
    private readonly issueService;
    [x: string]: any;
    constructor(issueModel: Model<Issue>, issueService: IssueService);
    create(issue: Issue): Promise<Issue>;
    findById(id: string): Promise<Issue>;
    assign(id: string, assignedTo: string): Promise<Issue>;
    resolve(id: string, resolvedBy: string): Promise<Issue>;
    deleteIssue(id: string): Promise<void>;
    createIssue(issue: Issue): Promise<Issue>;
    updateIssue(id: string, fields: Partial<Issue>): Promise<Issue>;
    getByParams(fields: Partial<Issue>): Promise<Issue[]>;
}
