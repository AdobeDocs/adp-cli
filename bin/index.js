#!/usr/bin/env node

import { program } from "commander";
import express from "express";

const app = express();
const port = 3000;

program
  .version("1.0.0")
  .description("adp-cli")
  .option('-p, --port <number>', 'Port number', 3000)
  .action((options) => {
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  });

program.parse(process.argv);
