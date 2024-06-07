export type Config = {
  openAiKey: string;
  actions: Array<Action>;
};

export type Action = {
  type: string;
  name: string;
  prompt?: string;
  parameters?: Array<string>;
  debugOutput?: string | number | undefined;
};
