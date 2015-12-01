"use strict";
declare module Zlib {
    class Deflate {
        constructor(arr: Uint8Array);
        compress(): Uint8Array;
    }
    class Inflate {
        constructor(arr: Uint8Array);
        decompress(): Uint8Array;
    }
    class RawInflate {
        constructor(arr: Uint8Array);
        decompress(): Uint8Array;
    }
    class InflateStream {
        constructor(arr: Uint8Array);
        decompress(): Uint8Array;
    }
}


interface ObjectConstructor {
    values(obj: Object): string[];
}

interface Array<T> {
    //map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    select<R>(selector: (item: T) => R): Array<R>;
    forEachAsyncProgressive(action: (item: T, callback: () => void) => void, finalCallback: () => void);
}
interface Number {
    toHex(): string;
    to8BitString(): string;
}
Number.prototype.toHex = function () { return this.toString(16); }
Number.prototype.to8BitString = function () { return this.toString(2).padLeft(8, "0"); }

interface JQuery {
    makeGraph(opts: any): JQuery;
}

interface ArrayConstructor {
    generateNumbers(from: number, until: number): number[];
}
interface JQueryXHR extends JQueryPromise {

}

interface String {
    padLeft(totalLength: number, paddingChar: string): string;
    last(): string;
}
    //String.prototype.toHex = function () { return this.toString(16); }
