import { Action } from "../types";

const promptBuilder = (
  prompt: string | undefined,
  parameters: Array<string> | undefined,
  context: { [index: string | number]: any },
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

const runOpenai = (
  action: Action,
  context: { [index: string | number]: any },
): any => {
  return promptBuilder(action.prompt, action.parameters, context);
};

export default runOpenai;
