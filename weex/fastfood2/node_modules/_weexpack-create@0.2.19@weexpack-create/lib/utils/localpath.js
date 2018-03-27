'use strict';

var path = require('path');

module.exports = {
  isLocalPath: function isLocalPath(templatePath) {
    return (/^[./]|(^[a-zA-Z]:)/.test(templatePath)
    );
  },
  getTemplatePath: function getTemplatePath(templatePath) {
    return path.isAbsolute(templatePath) ? templatePath : path.normalize(path.join(process.cwd(), templatePath));
  }
};