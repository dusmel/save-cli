import { homedir } from "os";
import chalk from "chalk";
import fs from "fs";
import { exec as nodeExec, execSync } from "child_process";
import util from "util";
import log from "../utilities/log.js";
import loader from "../utilities/loader.js";
import cloneRepos from "../shell/cloneRepos.js";
import colorize from "../utilities/colorize.js";
const exec = util.promisify(nodeExec);
const fsPromises = fs.promises;

/**
 * @summary Boot up basic save apps ( Api, dashboard, ussd)
 * @author Hadad
 */

export default async function bootUpSave() {
  const starterRepos = [
    "git@github.com:DreamStartLabs/Save_ussd-v3.git",
    "git@github.com:DreamStartLabs/Save_api-v3.git",
    "git@github.com:DreamStartLabs/Save_dashboard-v3.git",
  ];

  try {
    const homeDir = homedir();
    const folderName = `${homeDir}/Desktop/Save`;
    if (!fs.existsSync(folderName)) {
      log("Creating Save directory...", "info");
      await fsPromises.mkdir(folderName);
    }

    const cloneLoader = loader(colorize("", "info")).start();

    await cloneRepos(
      starterRepos,
      folderName
    );
    cloneLoader.succeed("Done cloning!");
    process.exit(1);
  } catch (error) {
    console.error(chalk.red(JSON.stringify(error)));
  }
}
