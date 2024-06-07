import path from "path";
import validateConfig from "./validations/config";
import validateAction from "./validations/action";
import { Action, Config } from "./types";

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

  console.log(context);
};

const promptBuilder = (
  prompt: string | undefined,
  parameters: Array<string> | undefined,
) => {
  if (!prompt || !parameters) {
    return prompt;
  }
  let parsedPrompt = prompt;
  parameters.map((parameter) => {
    parsedPrompt = parsedPrompt.replace(
      `{${parameter}}`,
      `${context[parameter]}`,
    );
  });
  return parsedPrompt;
};

const executeAction = (action: Action) => {
  if (action.debugOutput) {
    return action.debugOutput;
  }

  if (action.type === "openai") {
    return promptBuilder(action.prompt, action.parameters);
  }
};

export default runFlow;
