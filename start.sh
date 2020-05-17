#!/bin/bash
full_path=$(realpath $0)
dir_path=$(dirname $full_path)
echo $dir_path
#node server.js --prefix $dir_path
node $dir_path/server.js
