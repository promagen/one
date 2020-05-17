#!/bin/bash
@ECHO OFF
echo "I will install NPM packages on this project ..."
WHERE npm
if [ $? -eq 0 ]
then
  npm install
#echo "The script ran ok"
  exit 0
else
  echo "npm is not installed on this system!" >&2
  exit 1
fi
