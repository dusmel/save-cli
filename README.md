# save-cli

This cli will be used as an entry point for new devs to get started in no time and and serve as a collection of all the scripts we've had to work on so far.

Preview

<img width="686" alt="image" src="https://github.com/DreamStartLabs/Save_scripts/assets/27511264/b5277533-bbc9-4d89-aa49-5d4a2677df40">



## Main sections
- I'm new to save ( launch apps for me)
- Bootup apps [API, ussd, dashboard]
- Deploy
- Open Docs
- Contribute

### Get started
Build ( the script will get you started )
```bash
  curl -L https://raw.githubusercontent.com/dusmel/save-cli/develop/scripts/startup.sh -H "Cache-Control: no-cache, no-store, must-revalidate" | bash
```

Then run 
```bash
  save
```

### Usage
#### • I'm new to save ( launch apps for me)

This option will clone and run main apps for you. 

PS: It will create a repo on your desktop named `Save` if you have it already it will prompt you to override then backup you old dir under a different name in the same location.

#### • Bootup apps



### TODO:
- run all the services with docker and docker compose
- open dashboard and api swagger on browser
- add a way to save path preference in a file ( ~/.save/path/[save, mobile, ussd... for launcher])
- add documentation on credentials, db name, seeded value, how to use ussd
- add support for deployment ( frontend )
- add script for deploy staging and production and cisco
- add support for booting up mobile
- add help for the prompt
