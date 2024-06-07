import { parseStringWithParameters } from "../helper";
import { Action } from "../types";

const runOpenai = (
  action: Action,
  context: { [index: string | number]: any },
): any => {
  return parseStringWithParameters(action.prompt, action.parameters, context);
};

export default runOpenai;
