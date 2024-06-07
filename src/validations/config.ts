import { Config } from "../types";

const validateConfig = (config: Config) => {
  if (!config.openAiKey) {
    throw "Your config should have the 'openAiKey' key set with your OpenAI key.";
  }

  if (
    !config.actions ||
    typeof config.actions.length !== "number" ||
    config.actions.length < 1
  ) {
    throw "You should have an array of 'actions' on actions key.";
  }

  return true;
};

export default validateConfig;
