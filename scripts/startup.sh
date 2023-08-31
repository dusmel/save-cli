#!/bin/bash
red=`tput setaf 1`
dark=`tput setaf 239`
green=`tput setaf 2`
white=`tput setaf 7`
yellow=`tput setaf 3`
bold=$(tput bold)
normal=$(tput sgr0)
GREEN_BG=`tput setab 2`
RESET=`tput sgr0`

 mkdir ~/.save &&
 cd ~/.save &&
 git clone git@github.com:DreamStartLabs/Save_scripts.git save-cli &&
 cd save-cli &&
 npm install &&
 npm run build &&
 npm link &&
tput civis

printf "\n${dark}${GREEN_BG} save-cli  ${RESET} Now you can use ► "save"  🚀  command also check the doc for more options \n"

tput cnorm
