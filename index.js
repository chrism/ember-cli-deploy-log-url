'use strict';

var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: require('./package').name,

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      defaultConfig: {
        url: 'Add your URL to you config/deploy.js'
      },

      didDeploy: function(context) {
        const url = this.readConfig('url');
        this.log('Successfully deployed', { color: 'green' });
        this.log(url, { color: 'green' });
      }
    });

    return new DeployPlugin();
  }
};
