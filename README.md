# OpenAI Flow

## Description

This project gives you the capability to concatenate multiple prompts to ease your work, specially when you need to
repeat a certain order of prompts.

## Usage

First of all, install the packages:

```sh
$ yarn install
$ yarn build
```

Create a JSON file on the project folder. Let's call ours `example.json`.

```json
{
  "openAiKey": "your-open-ai-key-here",
  "model": "gpt-4o",
  "actions": [
    {
      "type": "openai",
      "name": "action-0",
      "prompt": "Who's the responsible for OpenAI releases today?"
    },
    {
      "type": "openai",
      "name": "action-1",
      "prompt": "Considering the responsible you mentioned here:\n{action-0}\nList the websites, social media accounts or anything you can find for me to watch the latest news on them. Don't say anything extra, just list the links. You can include any link that can include information on them."
    },
    {
      "type": "print",
      "name": "3",
      "output": "This is the output: {action-1}"
    }
  ]
}
```

After that we need to execute this:

```sh
$ node build/index.js -f ./example.json
```

That's all! After this you should see the output.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
