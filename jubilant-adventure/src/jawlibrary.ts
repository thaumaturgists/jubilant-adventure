   // src/jawlibrary.ts

   export interface jawInterface {
    property1: string;
    property2: number;
}

export function jawFunction(param: string): number {
    console.log(param);
    return param.length; // Example implementation
}