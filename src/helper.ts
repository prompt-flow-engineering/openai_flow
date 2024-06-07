import { Context } from "./types";

const extractPlaceholders = (str: string): string[] => {
  const regex = /\{(\d+)\}/g;
  const matches = [...str.matchAll(regex)];
  return matches.map((match) => match[1]);
};

const parseStringWithParameters = (
  inputString: string | undefined,
  context: Context,
) => {
  if (!inputString) {
    return inputString;
  }

  let parsedString = inputString;
  const placeholders = extractPlaceholders(inputString);

  placeholders.map((placeholder: any) => {
    parsedString = parsedString.replace(
      `{${placeholder}}`,
      `${context[placeholder]}`,
    );
  });

  return parsedString;
};

export { parseStringWithParameters };
