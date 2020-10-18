#!/usr/bin/env bash
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@gitee.com:huang-haotian/blockui-website.git &&
git push -u origin master -f
cd -