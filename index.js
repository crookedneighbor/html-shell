'use strict'

const fs = require('fs')

const HTML_SHELL = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>

  </body>
</html>`

module.exports = function htmlShell () {
  fs.writeFile('index.html', HTML_SHELL, (err) => {
    if (err) throw err;
    console.log('index.html has been created');
  });
}
