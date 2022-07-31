const npsUtils = require("nps-utils");

module.exports = {
  scripts: {
    test: 'echo "Error: no test specified"',
    serve: {
      default: 'tauri dev',
      dev: 'tauri dev',
    },
    build: {
      default: npsUtils.series('nps build.ui'),
      ui: 'webpack --config ./conf/build/webpack.config.js',
      tsc: 'tsc -p ./holler-ui/tsconfig.json',
    },
  }
};
