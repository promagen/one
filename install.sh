#!/bin/bash
echo "I will install NPM packages on this project ..."

full_path=$(realpath $0)
#echo $full_path
dir_path=$(dirname $full_path)
echo $dir_path

which npm
if [ $? -eq 0 ]
then
  ls -d $dir_path
  npm install --prefix $dir_path
#echo "The script ran ok"
  exit 0
else
  echo "npm is not installed on this system!" >&2
  exit 1
fi
