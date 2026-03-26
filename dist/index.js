#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const init_1 = __importDefault(require("./commands/init"));
const link_1 = __importDefault(require("./commands/link"));
const evaluate_1 = __importDefault(require("./commands/evaluate"));
const program = new commander_1.Command();
program.name("bitasmbl").description("Bitasmbl CLI").version("1.0.0");
program.command("init").description("Initialize Bitasmbl project").action(init_1.default);
program
    .command("link")
    .option("-p, --project <id>", "Project ID")
    .description("Link to Bitasmbl project")
    .action(link_1.default);
program
    .command("evaluate")
    .option("-t, --task <task>", "Task name")
    .description("Evaluate project/task")
    .action(evaluate_1.default);
program.parse();
//# sourceMappingURL=index.js.map