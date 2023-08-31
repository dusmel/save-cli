/**
 * @summary launch and Run single apps
 * @author Hadad
*/

import select, { Separator } from "@inquirer/select";
import chalk from "chalk";
import colorize from "../utilities/colorize";

export default async function () {
try {
  const appToLaunch = await select({
    message: "What do you want to do",
    choices: [
      new Separator(),
      {
        name: "◉ Save Mobile",
        value: "mobile",
        description: colorize("Open Simulator, vs code, flipper ☕️ 🁡", "caption"),
      },
      {
        name: "◉ API",
        value: "api",
        description: colorize("Run API ▻ Open vs code, postman, table plus ☕️ 🁡", "caption"),
      },
      {
        name: "◉ USSD",
        value: "ussd",
        description: colorize("Run USSD ▻ Open vs code, postman, table plus ☕️ 🁡", "caption"),
      },
      {
        name: "◉ Cronjob",
        value: "cronjob",
        description: colorize("Run Cronjob ▻ Open vs code, postman, table plus ☕️ 🁡", "caption"),
      },
      {
        name: "◉ Backup",
        value: "backup",
        description: colorize("Run backup ▻ Open vs code, postman, table plus ☕️ 🁡", "caption"),
      },
      {
        name: "◉ CLI",
        value: "cli",
        description: colorize("Help improving this cli ☕️ 🁡", "caption"),
      },
    ],
  });
} catch (error) {
  console.error(chalk.red(JSON.stringify(error)));
}

}