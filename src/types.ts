export type Context = { [index: string | number]: string | number | undefined };

export type Config = {
  openAiKey: string;
  actions: Array<Action>;
};

export type Action = {
  type: string;
  name: string;
  output?: string;
  prompt?: string;
  parameters?: Array<string>;
  debugOutput?: string | number | undefined;
};
