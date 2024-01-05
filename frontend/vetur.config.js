/** @type {import('vls').VeturConfig} */
module.exports = {
  // Notice: It only affects the settings used by Vetur.(override vscode settings)
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  // Set references for each project
  projects: [
    {
      root: './frontend',
      package: './node_modules/@chakra-ui/vue-next/package.json',
      tsconfig: './tsconfig.json',
      globalComponents: []
    }
  ]
};
