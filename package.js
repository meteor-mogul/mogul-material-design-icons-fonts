Package.describe({
  name: 'meteormogul:material-design-icons-fonts',
  version: '3.0.1',
  // Brief, one-line summary of the package.
  summary: 'Material Design Icons Fonts for Meteor Mogul',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor-mogul/mogul-material-design-icons-fonts.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.addAssets([
    'iconfont/MaterialIcons-Regular.eot',
    'iconfont/MaterialIcons-Regular.ijmap',
    'iconfont/MaterialIcons-Regular.svg',
    'iconfont/MaterialIcons-Regular.ttf',
    'iconfont/MaterialIcons-Regular.woff',
    'iconfont/MaterialIcons-Regular.woff2'
  ], 'client');
  api.addFiles('iconfont/material-icons.css', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteormogul:material-design-icons-fonts');
  api.mainModule('material-design-icons-fonts-tests.js');
});
