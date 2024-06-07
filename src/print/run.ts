import { parseStringWithParameters } from "../helper";
import { Action, Context } from "../types";

const runPrint = async (
  action: Action,
  context: Context,
): Promise<string | number | undefined> => {
  const parsedPrompt = parseStringWithParameters(
    action.output,
    action.parameters,
    context,
  );
  console.log(parsedPrompt);
  return parsedPrompt;
};

export default runPrint;
