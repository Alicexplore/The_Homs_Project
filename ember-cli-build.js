'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss',
      includePaths: [
        'app/styles/homepage.scss', 'app/styles/app.scss', 
      ]
    },
  });

  return app.toTree();
};
