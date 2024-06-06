"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const run_1 = __importDefault(require("./src/run"));
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("OpenAI Flow"));
console.log();
program
    .name("node build/index.js")
    .description("A CLI to treat OpenAI prompts as a workflow.")
    .requiredOption("-f, --file <path_to_file.json>", "Path to YAML file with the configuration.");
program.parse();
const options = program.opts();
if (options.file) {
    (0, run_1.default)(options.file);
}
