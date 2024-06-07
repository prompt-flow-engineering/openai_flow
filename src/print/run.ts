import { parseStringWithParameters } from "../helper";
import { Action } from "../types";

const runPrint = (
  action: Action,
  context: { [index: string | number]: any },
): any => {
  const parsedPrompt = parseStringWithParameters(action.output, action.parameters, context)
  console.log(parsedPrompt)
  return parsedPrompt;
};

export default runPrint;
