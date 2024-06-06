"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./validations/config"));
const action_1 = __importDefault(require("./validations/action"));
let context = {};
const runFlow = (file_path) => {
    const resolvedPath = path_1.default.resolve(file_path);
    const flowConfig = require(resolvedPath);
    (0, config_1.default)(flowConfig);
    flowConfig.actions.map((action) => (0, action_1.default)(action));
    console.log("[INFO] Configuration file validated. Starting to run.");
    flowConfig.actions.map((action, index) => {
        console.log(`[INFO] Executing action #${index}`);
        context[action.name] = executeAction(action);
    });
    console.log(context);
};
const promptBuilder = (prompt, parameters) => {
    if (!prompt || !parameters) {
        return prompt;
    }
    let parsedPrompt = prompt;
    parameters.map((parameter) => {
        parsedPrompt = parsedPrompt.replace(`{${parameter}}`, `${context[parameter]}`);
    });
    return parsedPrompt;
};
const executeAction = (action) => {
    if (action.debugOutput) {
        return action.debugOutput;
    }
    if (action.type === "openai") {
        return promptBuilder(action.prompt, action.parameters);
    }
};
exports.default = runFlow;
