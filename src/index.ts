const figlet = require("figlet");
import { input } from "@inquirer/prompts";
import select, { Separator } from "@inquirer/select";
import bootUpSave from "./actions/newToSave.js";
import colorize from "./utilities/colorize.js";
import log from "./utilities/log";
import chalk from "chalk";


type initialAnswerType = "new" | "deploy";

(async () => {
  console.log(
    "\n",
    chalk.cyan(
      figlet.textSync("Save Scripts", {
        font: "Standard",
        horizontalLayout: "fitted",
        verticalLayout: "full",
      })
    )
  );

  const initialAnswer: initialAnswerType = await select({
    message: colorize("What do you want to do", "info"),
    choices: [
      {
        name: "I'm new to save! (bootup apps for me)",
        value: "new",
        description:
          "?? This will clone api, dashboard and ussd for you and run them on Docker",
      },
      {
        name: "Deploy",
        value: "deploy",
        description: "Use this option to deploy a specific platform",
      },
      new Separator(),
    ],
  });

  switch (initialAnswer) {
    case "new":
      await bootUpSave();
      break;

    default:
      break;
  }
})();

// TODO: Things to cover
// - clone main repo
// - run all the services with docker and docker compose
// - open dashboard and api swagger on browser
// - add documentation on credentials, db name, seeded value, how to use ussd
// - add support for deployment ( frontend )
// - add script for deploy staging and production and cisco
// - add support for booting up mobile
// - add help for the prompt