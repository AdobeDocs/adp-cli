#!/usr/bin/env node

import { program } from "commander";
import { middleware } from "../lib/middleware.js"

program
  .version("1.0.0")
  .description("adp-cli")
  .option('-p, --port <number>', 'Port number', 3000)
  .action((options) => {
    middleware(options);
  });

program.parse(process.argv);
