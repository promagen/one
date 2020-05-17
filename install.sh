#!/bin/bash
echo "I will install NPM packages on this project ..."
project_root=$(dirname $(dirname $(dirname $(realpath $0 ))))
echo $project_root

data_dir="$project_root/examples/data"
echo "DATA: $data_dir"

which npm
if [ $? -eq 0 ]
then
  ls -la
  npm install
#echo "The script ran ok"
  exit 0
else
  echo "npm is not installed on this system!" >&2
  exit 1
fi
