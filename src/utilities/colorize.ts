import chalk from 'chalk';

export default (
  message: string,
  status: 'default' | 'success' | 'important' | 'error' | 'info' = 'default',
): string => {
  if (status === 'default') return chalk.hex("#000").bgGray(message);
  if (status === "info") return `${chalk.bgHex("#6366f1").white(" Info ")} ${message}`
  if (status === 'success') return chalk.hex("#8EEDB3").bold(message)
  if (status === 'important') return chalk.bgYellow.black(message);
  if (status === 'error') return chalk.red(message);

  return ""
};
