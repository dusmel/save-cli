import chalk from "chalk";

export type printStatusType =
  | "default"
  | "success"
  | "important"
  | "error"
  | "info"
  | "infoWarn"
  | "caption"
  | "neutral";

export default (
  message: string,
  status: printStatusType = "default"
): string => {
  if (status === "default") return chalk.hex("#000").bgGray(message);
  if (status === "neutral") return message;
  if (status === "caption") return chalk.grey(`◉ ❇︎ ${message}`);
  if (status === "info")
    return `${chalk.bgHex("#6366f1").white(" Info ")} ${message}`;
  if (status === "infoWarn")
    return `${chalk.bgHex("#f59e0b").white(" Warn ▲ ")} ${message}`;
  if (status === "success") return chalk.hex("#8EEDB3").bold(message);
  if (status === "important") return chalk.bgYellow.black(message);
  if (status === "error") return chalk.red(message);

  return "";
};
