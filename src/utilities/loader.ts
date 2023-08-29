import ora from "ora";

export default (text?: any) => ora({ text, spinner: 'dots2', discardStdin: false, color: 'cyan' });