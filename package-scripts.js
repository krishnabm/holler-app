const { series } = require("nps-utils");

module.exports = {
  scripts: {
    test: 'echo "Error: no test specified"',
    serve: {
      default: 'nps serve.dev',
      dev: 'tauri dev',
    },
    build: {
      default: series('nps clean', 'nps build.ui'),
      ui: 'webpack --config ./conf/build/webpack.config.js',
      // Unused, use webpack build instead
      tsc: 'tsc -p ./holler-ui/tsconfig.json',
    },
    clean: {
      default: 'nps clean.purgeUi',
      purgeAll: series('nps clean.purgeCore', 'nps clean.purgeUi'),
      purgeCore: 'rimraf holler-core/target',
      purgeUi: 'rimraf dist',
    },
    purge: {
      default: series('rimraf dist', 'rimraf holler-core/target')
    }
  }
};
