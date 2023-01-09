/* eslint-disable no-console */
/* eslint-disable no-global-assign */
require = require('esm')(module);

// module.exports = require('./src').
const { ocr } = require('./src/index');

(async () => {
  console.log('TESTE RUN.JS');
  const teste = await ocr();
  console.log(`🚀 ~ file: run.js ~ line 11 ~ teste`, teste);
})();
