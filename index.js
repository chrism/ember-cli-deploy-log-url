'use strict';

var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: require('./package').name,

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      didDeploy: function(context) {
        this.log('Successfully deployed', { color: 'green' });
      }
    });

    return new DeployPlugin();
  }
};
