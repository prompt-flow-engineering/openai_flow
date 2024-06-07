import { parseStringWithParameters } from "../helper";
import { Action, Context } from "../types";

const runOpenai = (
  action: Action,
  context: Context,
): string | number | undefined => {
  return parseStringWithParameters(action.prompt, action.parameters, context);
};

export default runOpenai;
