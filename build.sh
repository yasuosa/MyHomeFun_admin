#!/bin/bash 

echo "打包文件"
yarn build
echo "传输文件"

scp -r ./dist/** root@47.103.116.78:/data/avue/avue-cli1

echo "部署成功"