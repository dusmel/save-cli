import shell from "shelljs";

const cloneRepos = (Repos: string[][], Dir: string) =>
  new Promise((fulfill, reject) => {
    const cloneCmd = Repos.reduce(
      (finalCmd, [repoLink, alias]) => `${finalCmd} && git clone ${repoLink} ${alias}`,
      ""
    );
    shell.exec(
      `cd ${Dir} \
      ${cloneCmd}`,
      (code, stdout, stderr) => {
        if (code !== 0) {
          reject(new Error("Git clone failed"));
          return;
        }
        fulfill({ code, stdout, stderr });
      }
    );
  }).catch((err) => {
    shell.echo(`Error: ${err.message}`);
    shell.exit(0);
  });

export default cloneRepos;
