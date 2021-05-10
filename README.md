# nodejs-jest-customers-balancing
NodeJS + Jest (customers-balancing)

**Note**: this project uses ES2015+ (ES6) featuares and Jest for Unit tests.

## Installing the dependencies
After you get the project cloned, jsust run:
```shell
npm install
```

## Running all Jest Unit tests
```shell
npm test
```

### Debuging in VSCode Config
Edit your **.vscode/launch.json** and add this inside your **configurations** array:
```json
{
    "name": "Jest All",
    "type": "node",
    "request": "launch",
    "outputCapture": "std",
    "program": "${workspaceFolder}/node_modules/jest/bin/jest.js",
    "runtimeArgs": [
        "--experimental-vm-modules"
    ],
    "args": [
        "-i",
        "--silent",
        "false",
        "-t",
        "Scenario",
        "-c",
        "${workspaceFolder}/package.json"
    ],
    "console": "integratedTerminal",
    "internalConsoleOptions": "neverOpen"
}
``` 
**Note 2**: console.log still can't print to std during the debug session. I'll tackle this in the future...