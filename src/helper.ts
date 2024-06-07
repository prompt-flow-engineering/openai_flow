import { Context } from "./types";

const parseStringWithParameters = (
  inputString: string | undefined,
  parameters: Array<string> | undefined,
  context: Context,
) => {
  if (!inputString || !parameters) {
    return inputString;
  }

  let parsedString = inputString;
  parameters.map((parameter: any) => {
    parsedString = parsedString.replace(
      `{${parameter}}`,
      `${context[parameter]}`,
    );
  });

  return parsedString;
};

export { parseStringWithParameters };
