// This means it must be an array of strings;
let strArr: string[];
let strArr2: string[];
let numArr: number[];
let boolArr: boolean[];

strArr = ["blue", "blue"];
strArr2 = ["blue", "blue", 100000];
numArr = [11, 99, 100000];
boolArr = [true, false, false];

// You can also define arrays like this:
let strArr3: Array<string>;
let boolArr2: Array<boolean>;
let numArr2: Array<number>;

strArr3 = ["blue", "blue"];
numArr2 = [11, 99, 100000];
boolArr2 = [true, false, false];

let strNumTuple: [string, number];
strNumTuple = ["hello", 100];

let myVoid: void = null;
let myVoid2: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myVoid);
