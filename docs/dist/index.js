"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
import { jawFunction } from "./jawlibrary";
const result = (0, jawFunction)('Hello, jawlibrary!');
console.log(`Length of the string: ${result}`);
const obj = {
    property1: 'Example',
    property2: 42
};
console.log(obj);
