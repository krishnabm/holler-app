const { series } = require("nps-utils");

module.exports = {
  scripts: {
    test: 'echo "Error: no test specified"',
    serve: {
      default: 'tauri dev',
      dev: 'tauri dev',
    },
    build: {
      default: series('nps clean', 'nps build.ui'),
      ui: 'webpack --config ./conf/build/webpack.config.js',
      tsc: 'tsc -p ./holler-ui/tsconfig.json',
    },
    clean: {
      default: series('rimraf dist'),
    },
  }
};
