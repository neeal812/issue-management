"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueSchema = exports.IssueCriticality = void 0;
const mongoose = require("mongoose");
var IssueCriticality;
(function (IssueCriticality) {
    IssueCriticality["Critical"] = "Critical";
    IssueCriticality["High"] = "High";
    IssueCriticality["Low"] = "Low";
})(IssueCriticality = exports.IssueCriticality || (exports.IssueCriticality = {}));
exports.IssueSchema = new mongoose.Schema({
    assetId: { type: String },
    title: { type: String },
    deviceInstanceId: { type: String },
    virtualDeviceInstanceId: { type: String },
    alertId: { type: String },
    description: { type: String, required: true },
    criticality: { type: String, enum: ['Critical', 'High', 'Low'], required: true },
    openDateTime: { type: Date, default: Date.now },
    openedBy: { type: String },
    enteredDateTime: { type: Date, default: Date.now },
    enteredBy: { type: String },
    assignedDateTime: { type: Date },
    assignedTo: { type: String },
    assignedBy: { type: String },
    resolvedDateTime: { type: Date },
    resolvedBy: { type: String },
    resolveTo: { type: String },
    resolve: { type: String },
    getIssueByTitle: { type: String },
});
//# sourceMappingURL=issue.model.js.map