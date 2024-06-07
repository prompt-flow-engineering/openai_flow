import { parseStringWithParameters } from "../helper";
import { Action, Config, Context } from "../types";
import OpenAI from "openai";

const runOpenai = async (
  config: Config,
  action: Action,
  context: Context,
): Promise<string | number | undefined> => {
  const openai = new OpenAI({ apiKey: config.openAiKey });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          parseStringWithParameters(
            action.prompt,
            action.parameters,
            context,
          ) || "",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  // return parseStringWithParameters(action.prompt, action.parameters, context);
  return `${completion.choices[0].message.content}`;
};

export default runOpenai;
