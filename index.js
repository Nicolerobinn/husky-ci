'use strict'

if (process.platform !== 'Linux') {
  const fs = require('fs');
  fs.access('.husky', fs.constants.F_OK, (err) => {
    if (err) {
      let husky
      try {
        husky = require('husky');
      } catch (error) {
        console.error('这不是一个错误，只是没有安装husky模块')
        return
      }
      husky.install();
      husky.add('.husky/commit-msg', 'yarn commitlint --edit "$1"');
      husky.add('.husky/pre-commit', 'yarn lint-staged');
    }
  });
} else {
  console.log('当前不在开发环境')
}

