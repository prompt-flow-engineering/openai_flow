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
            context,
          ) || "",
      },
    ],
    model: config.model,
  });

  return `${completion.choices[0].message.content}`;
};

export default runOpenai;
