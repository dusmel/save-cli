#!/bin/bash
 mkdir ~/.save &&
 cd ~/.save &&
 git clone git@github.com:DreamStartLabs/Save_scripts.git save-cli &&
 cd save-cli &&
 npm install &&
 npm run build &&
 npm link &&

 echo "Now you can use `save` command also check the doc for more options"


