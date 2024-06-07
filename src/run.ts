import path from "path";
import validateConfig from "./validations/config";
import validateAction from "./validations/action";
import { Action, Config, Context } from "./types";
import runOpenai from "./openai/run";
import runPrint from "./print/run";

let context: Context = {};

const runFlow = async (file_path: string) => {
  const resolvedPath = path.resolve(file_path);
  const flowConfig: Config = require(resolvedPath);
  validateConfig(flowConfig);
  flowConfig.actions.map((action: Action) => validateAction(action));
  console.log("[INFO] Configuration file validated. Starting to run.");

  for (const [index, action] of flowConfig.actions.entries()) {
    console.log(`[INFO] Executing action #${index}`);
    context[action.name] = await executeAction(flowConfig, action);
  }
};

const executeAction = async (config: Config, action: Action) => {
  if (action.debugOutput) {
    return action.debugOutput;
  }

  if (action.type === "openai") {
    return await runOpenai(config, action, context);
  }

  if (action.type === "print") {
    return await runPrint(action, context);
  }
};

export default runFlow;
