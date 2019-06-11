const path = require('path');

module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova',
  },
  outputDir: path.resolve(__dirname, '../SmartFeederApp-Server-Cloudant-/public'),
  filenameHashing: false,
  // assetsDir: "../../static/SPA"
};
