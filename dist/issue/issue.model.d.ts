import * as mongoose from 'mongoose';
export declare enum IssueCriticality {
    Critical = "Critical",
    High = "High",
    Low = "Low"
}
export declare const IssueSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    description: string;
    criticality: "Critical" | "High" | "Low";
    openDateTime: Date;
    enteredDateTime: Date;
    assetId?: string;
    title?: string;
    deviceInstanceId?: string;
    virtualDeviceInstanceId?: string;
    alertId?: string;
    openedBy?: string;
    enteredBy?: string;
    assignedDateTime?: Date;
    assignedTo?: string;
    assignedBy?: string;
    resolvedDateTime?: Date;
    resolvedBy?: string;
    resolveTo?: string;
    resolve?: string;
    getIssueByTitle?: string;
}>;
export interface Issue extends mongoose.Document {
    id?: string;
    title?: string;
    assetId?: string;
    deviceInstanceId?: string;
    virtualDeviceInstanceId?: string;
    alertId?: string;
    description: string;
    criticality: 'Critical' | 'High' | 'Low';
    openDateTime: Date;
    openedBy?: string;
    enteredDateTime: Date;
    enteredBy?: string;
    assignedDateTime?: Date;
    assignedTo?: string;
    assignedBy?: string;
    resolvedDateTime?: Date;
    resolvedBy?: string;
    resolveTo: String;
    resolve: string;
    getIssueByTitle: string;
}
