import { homedir } from "os";
import chalk from "chalk";
import fs from "fs";
import { execSync } from "child_process";
import log from "../utilities/log.js";
import loader from "../utilities/loader.js";
import cloneRepos from "../shell/cloneRepos.js";
import colorize from "../utilities/colorize.js";
import confirm from "@inquirer/confirm";
import path from "path";
const fsPromises = fs.promises;

/**
 * @summary Boot up basic save apps ( Api, dashboard, ussd)
 * @author Hadad
 */

export default async function bootUpSave() {
  const starterRepos: string[][] = [
    ["git@github.com:DreamStartLabs/Save_ussd-v3.git", "ussd"],
    ["git@github.com:DreamStartLabs/Save_api-v3.git", "api"],
    [
      "-b chore-dockerize-the-app git@github.com:DreamStartLabs/Save_dashboard-v3.git",
      "dashboard",
    ],
  ];

  try {
    const homeDir = homedir();
    const folderName = `${homeDir}/Desktop/Save`;
    if (fs.existsSync(folderName)) {
      const answer = await confirm({
        message: colorize(
          "Save repo seems to exits on your Desktop, do you want to override?",
          "infoWarn"
        ),
      });
      if (answer) {
        // rename move folder to backup-HHmm
        const currentDate = new Date();
        const oldFolderSuffix = `${currentDate.getHours()}${currentDate.getMinutes()}`;
        const oldFolderName = `${folderName}-backup-${oldFolderSuffix}`;
        await fsPromises.rename(folderName, oldFolderName);
        log(`Moved your dir to ${oldFolderName}`);
      } else {
        log("❖ Namaste!! 🚀", "neutral", true);
        process.exit(1);
      }
    }

    log("Creating Save directory...");
    await fsPromises.mkdir(folderName);

    const cloneLoader = loader(colorize("", "info")).start();
    await cloneRepos(starterRepos, folderName);
    cloneLoader.succeed("Done cloning!");

    log("Copy docker-compose file");
    const dockerComposePath = path.join(
      process.cwd(),
      `files/save/docker-compose.yml`
    );
    await fsPromises.copyFile(
      dockerComposePath,
      `${folderName}/docker-compose.yml`
    );
    execSync(`cd ${folderName} && docker-compose up --build`, {
      stdio: "inherit",
      shell: '/bin/bash'
    });

    process.exit(1);
  } catch (error) {
    console.error(chalk.red(JSON.stringify(error)));
  }
}
