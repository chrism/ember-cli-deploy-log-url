ember-cli-deploy-log-url
==============================================================================

Simple plugin to log the URL after a successful deployment.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-deploy-log-url
```


Usage
------------------------------------------------------------------------------

Just add to `ENV` in your `config/deploy.js` file

```js
'log-url': {
  url: 'http://example.com'
}
```

And after a successful deployment you will see the output in green with this URL for convenience.

```
+- didDeploy
|  |
|  +- log-url
|    - Successfully deployed
|    - http://example.com
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
