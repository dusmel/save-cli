import chalk from "chalk";
import { printStatusType } from "./colorize";

export default (
  message: string,
  status: printStatusType = "neutral",
  skipLine?: boolean
): void => {
  if (skipLine) console.log("\n");

  if (status === "default") console.log(chalk.hex("#000").bgGray(message));
  if (status === "neutral") console.log(message);
  if (status === "info")
    console.log(chalk.bgHex("#6366f1").white(" Warn "), message);
  if (status === "infoWarn")
    console.log(chalk.bgHex("#EEB467").white(" Info "), message);
  if (status === "success") console.log(chalk.hex("#8EEDB3")(message));
  if (status === "important") console.log(chalk.bgYellow.black(message));
  if (status === "error") console.error(chalk.red(message));
};
