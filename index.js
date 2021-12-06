'use strict'
if (process.platform !== 'linux') {
  const fs = require('fs');
  fs.access('.husky', fs.constants.F_OK, (err) => {
    if (err) {
      let husky
      try {
        husky = require('husky');
      } catch (error) {
        console.log("没有安装husky模块，不会执行创建命令")
        return
      }
      husky.install();
      husky.add('.husky/commit-msg', 'yarn commitlint --edit "$1"');
      husky.add('.husky/pre-commit', 'yarn lint-staged');
    } else {
      console.log("这不是一个错误,当前已经存在husky文件，不会重复生成 ")
    }
  });
} else {
  console.log('当前不在开发环境，当前环境为' + process.platform)
}
