// src/index.ts

import { jawFunction as customFunction, jawInterface as CustomInterface } from './jawlibrary';

const result: number = customFunction('Hello, jawlibrary!');
console.log(`Length of the string: ${result}`);

const obj: CustomInterface = {
    property1: 'Example',
    property2: 42
};
console.log(obj);