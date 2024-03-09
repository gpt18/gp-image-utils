# Project setup

1. Run `npm install`
2. Edit `package.json` file.
3. Uncomment lines in `.gitignore` file.
4. Run `npm run build`
5. Clean the existing sample code in `index.ts`, `functions.ts`, `types.ts`.
6. Start writing your own functions or code.
7. Finally, Build and publish your code to npm.


## Folder structure

```
.
├── src                  # Push to github
│   ├── index.ts         # Entry point of your package
│   ├── functions.ts     # File where you define your package's functions
│   └── types.ts         # File where you define your package's types
├── dist                 # Push to npm. Compiled code
├── node_modules         # Directory for installed packages
├── .gitignore           # File specifying which files and directories to ignore in Git
├── package.json         # File containing metadata about your package
├── README.md            # File containing documentation for your package
├── tsconfig.json        # Configuration file for TypeScript
├── .npmignore           
└── tsup.config.ts       
```

## Package.json Guide

This guide will help you understand and modify the `package.json` file in this project.

- `name`: Replace with your package name.
- `version`: The current version of your package.
- `description`: Replace with a description of your package.
- `main`: The entry point for your package. Default is `./dist/index.js`.
- `module`: The module entry point for your package. Default is `./dist/index.mjs`.
- `types`: The TypeScript definition file for your package. Default is `./dist/index.d.ts`.
- `homepage`: Replace with the homepage URL for your package.
- `repository`: Replace with the URL of your package's repository.
- `scripts`: Scripts that can be run from the command line. Default is `tsup` for the build script.
- `keywords`: Replace with keywords related to your package.
- `author`: Replace with the author's name.
- `license`: The license for your package. Default is `MIT`.
- `devDependencies`: Development dependencies for your package. Default are `tsup` and `typescript`.

Please modify these fields according to your project's needs.

## .gitignore File Guide

Please uncomment the below line `.gitignore` file.

- `/node_modules`
- `/dist`
- `.env`
- `.DS_Store`


# Start writing your own code


This template provides a starting point `/src` folder for creating your own npm package. It includes:
- `index.ts` file
- `functions.ts` file
- `types.ts` file

1. Open the file in your text editor.
2. Delete the existing sample code.
3. Start writing your own functions or code.


## Publish 

Push your code to npm

1. Make sure your `/dist` has latest code. Run `npm run build` 
2. Time to push it. Run `npm publish`
3. Authenticate your npm account.

Hurry! Your first npm package is now Published :) Great Job!