#!/usr/bin/env node

import { Command } from "commander";
import init from "./commands/init";
import link from "./commands/link";
import evaluate from "./commands/evaluate";

const program = new Command();

program.name("bitasmbl").description("Bitasmbl CLI").version("1.0.0");

program.command("init").description("Initialize Bitasmbl project").action(init);

program
  .command("link")
  .option("-p, --project <id>", "Project ID")
  .description("Link to Bitasmbl project")
  .action(link);

program
  .command("evaluate")
  .option("-t, --task <task>", "Task name")
  .description("Evaluate project/task")
  .action(evaluate);

program.parse();
