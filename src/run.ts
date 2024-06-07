import path from "path";
import validateConfig from "./validations/config";
import validateAction from "./validations/action";
import { Action, Config } from "./types";
import runOpenai from "./openai/run";
import runPrint from "./print/run";

let context: { [index: string | number]: any } = {};

const runFlow = (file_path: string) => {
  const resolvedPath = path.resolve(file_path);
  const flowConfig: Config = require(resolvedPath);
  validateConfig(flowConfig);
  flowConfig.actions.map((action: Action) => validateAction(action));
  console.log("[INFO] Configuration file validated. Starting to run.");

  flowConfig.actions.map((action: Action, index: number) => {
    console.log(`[INFO] Executing action #${index}`);
    context[action.name] = executeAction(action);
  });
};

const executeAction = (action: Action) => {
  if (action.debugOutput) {
    return action.debugOutput;
  }

  if (action.type === "openai") {
    return runOpenai(action, context);
  }

  if (action.type === "print") {
    return runPrint(action, context);
  }
};

export default runFlow;
