import { Action } from "../types";

const validateAction = (action: Action) => {
  if (!action.type) {
    throw "Each action should have a type in 'type' key.";
  }

  if (["openai", "print"].indexOf(action.type) === -1) {
    throw "The available types for an action are: openai, print.";
  }

  if (action.type === "openai" && !action.prompt && !action.debugOutput) {
    throw "A prompt in key 'prompt' is necessary of openai actions.";
  }

  if (action.type === "print" && !action.output && !action.debugOutput) {
    throw "An output in key 'output' is necessary of print actions.";
  }

  if (!action.name) {
    throw "Each action should have a name in 'name' key.";
  }
};

export default validateAction;
