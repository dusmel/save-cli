import chalk from "chalk";

export default (
  message: string,
  status: "default" | "success" | "important" | "error" | "info" = "default"
): void => {
  if (status === "default") console.log("\n ", chalk.hex("#000").bgGray(message));
  if (status === "info") console.log(chalk.bgHex("#6366f1").white(" Info "), message);
  if (status === "success") console.log("\n ", chalk.hex("#8EEDB3")(message));
  if (status === "important")
    console.log("\n ", chalk.bgYellow.black(message));
  if (status === "error") console.error("\n ", chalk.red(message));
};
