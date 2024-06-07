const parseStringWithParameters = (
  inputString: string | undefined,
  parameters: Array<string> | undefined,
  context: { [index: string | number]: any },
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
