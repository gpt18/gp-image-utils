# NPM Package Template

This template is designed to kickstart your journey in creating your own npm package. It provides a basic folder structure and initial files to get you started.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Package.json Guide](#packagejson-guide)
- [Gitignore File Guide](#gitignore-file-guide)
- [Writing Your Code](#writing-your-code)
- [Publishing Your Package](#publishing-your-package)

## Getting Started

To set up your project, follow these steps:

1. Install the necessary dependencies with `npm install`.
2. Modify the `package.json` file to suit your project's needs.
3. Uncomment the necessary lines in the `.gitignore` file.
4. Build your project with `npm run build`.
5. Clear the existing sample code in `index.ts`, `functions.ts`, and `types.ts`.
6. Start writing your own functions or code.
7. When ready, build and publish your code to npm.

## Project Structure

The project is structured as follows:

```
.
├── src                  # Source files (push to GitHub)
│   ├── index.ts         # Entry point of your package
│   ├── functions.ts     # File where you define your package's functions
│   └── types.ts         # File where you define your package's types
├── dist                 # Compiled code (push to npm)
├── node_modules         # Directory for installed packages
├── .gitignore           # File specifying which files and directories to ignore in Git
├── package.json         # File containing metadata about your package
├── README.md            # File containing documentation for your package
├── tsconfig.json        # Configuration file for TypeScript
├── .npmignore           
└── tsup.config.ts       
```

## Package.json Guide

The `package.json` file contains important information about your project. Here's a guide to understanding and modifying it:

- `name`: Your package name.
- `version`: The current version of your package.
- `description`: A description of your package.
- `main`: The entry point for your package. Default is `./dist/index.js`.
- `module`: The module entry point for your package. Default is `./dist/index.mjs`.
- `types`: The TypeScript definition file for your package. Default is `./dist/index.d.ts`.
- `homepage`: The homepage URL for your package.
- `repository`: The URL of your package's repository.
- `scripts`: Scripts that can be run from the command line. Default is `tsup` for the build script.
- `keywords`: Keywords related to your package.
- `author`: The author's name.
- `license`: The license for your package. Default is `MIT`.
- `devDependencies`: Development dependencies for your package. Default are `tsup` and `typescript`.

## .gitignore File Guide

The `.gitignore` file specifies which files and directories should be ignored by Git. Uncomment the following lines as needed:

- `/node_modules`
- `/dist`
- `.env`
- `.DS_Store`

## Writing Your Code

The `/src` folder is your starting point. It includes the `index.ts`, `functions.ts`, and `types.ts` files. To start writing your own code:

1. Open the file in your text editor.
2. Delete the existing sample code.
3. Start writing your own functions or code.

## Publishing Your Package

When you're ready to publish your package to npm:

1. Ensure your `/dist` directory has the latest code. Run `npm run build`:

   ```bash
   npm run build
   ```

2. Publish your package with `npm publish`:

   ```bash
   npm publish
   ```

3. Authenticate with your npm account.

Congratulations! Your npm package is now published. Great job!
