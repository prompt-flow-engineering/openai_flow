"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateAction = (action) => {
    if (!action.type) {
        throw "Each action should have a type in 'type' key.";
    }
    if (["openai"].indexOf(action.type) === -1) {
        throw "The available types for an action are: openai.";
    }
    if (action.type === 'openai' && !action.prompt && !action.debugOutput) {
        throw "A prompt in key 'prompt' is necessary of openai actions.";
    }
    if (!action.name) {
        throw "Each action should have a name in 'name' key.";
    }
};
exports.default = validateAction;
