#!/usr/bin/env node

const figlet = require("figlet");
import select, { Separator } from "@inquirer/select";
import bootUpSave from "./actions/newToSave.js";
import colorize from "./utilities/colorize.js";
import log from "./utilities/log";
import chalk from "chalk";
import launchApp from "./actions/launchApp.js";

type initialAnswerType =
  | "new"
  | "deploy"
  | "launch-app"
  | "docs"
  | "contribute";

(async () => {
  console.log(
    "\n",
    chalk.cyan(
      figlet.textSync("Save cli", {
        font: "ANSI Shadow",
        horizontalLayout: "default",
        with: 10,
        verticalLayout: "default",
        // whitespaceBreak: true,
      })
    )
  );

  console.log(
    chalk.bgHex("#8EEDB4").hex("#596D79")(" save cli "),
    chalk.green("v1.0.0 "),
    "Get started -:)  \n"
  );

  const initialAnswer: initialAnswerType = await select({
    message: "What do you want to do",
    choices: [
      new Separator(),
      {
        name: "I'm new to save! (bootup apps for me)",
        value: "new",
        description: colorize(
          "This will clone api, dashboard and ussd for you and run them on Docker",
          "caption"
        ),
      },
      {
        name: "Bootup apps",
        value: "launch-app",
        description: colorize("Run and launch apps", "caption"),
      },
      {
        name: "Deploy",
        value: "deploy",
        description: colorize(
          "Use this option to deploy a specific platform",
          "caption"
        ),
      },
      {
        name: "Open docs",
        value: "docs",
        description: colorize("Open our docs WIKI on notion", "caption"),
      },
      {
        name: "Contribute",
        value: "contribute",
        description: colorize("Help improving this cli ☕️", "caption"),
      },
    ],
  });

  switch (initialAnswer) {
    case "new":
      await bootUpSave();
      break;
    case "launch-app":
      await launchApp();
      break;

    default:
      break;
  }
})();

// TODO: Things to cover
// - clone main repo
// - run all the services with docker and docker compose
// - open dashboard and api swagger on browser
// - add a way to save path preference in a file ( ~/.save/path/[save, mobile, ussd... for launcher])
// - add documentation on credentials, db name, seeded value, how to use ussd
// - add support for deployment ( frontend )
// - add script for deploy staging and production and cisco
// - add support for booting up mobile
// - add help for the prompt
