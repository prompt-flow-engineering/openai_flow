import { Command } from "commander";
import figlet from "figlet";
import runFlow from "./src/run";

const program = new Command();

console.log(figlet.textSync("OpenAI Flow"));
console.log();

program
  .name("node build/index.js")
  .description("A CLI to treat OpenAI prompts as a workflow.")
  .requiredOption(
    "-f, --file <path_to_file.json>",
    "Path to YAML file with the configuration.",
  );

program.parse();

const options = program.opts();
if (options.file) {
  runFlow(options.file);
}
