import { parseStringWithParameters } from "../helper";
import { Action, Context } from "../types";

const runPrint = (
  action: Action,
  context: Context,
): string | number | undefined => {
  const parsedPrompt = parseStringWithParameters(
    action.output,
    action.parameters,
    context,
  );
  console.log(parsedPrompt);
  return parsedPrompt;
};

export default runPrint;
