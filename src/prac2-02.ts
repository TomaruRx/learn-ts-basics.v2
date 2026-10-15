// 配列の初期化 (型明示)
const numArr1: number[] = [4649, 3150, 0.5, -1];
const strArr1: string[] = ["M", "D", "E", "知能情報"];

// 配列の初期化 (型推論)
const numArr2 = [4649, 3150, 0.5, -1];
const strArr2 = ["M", "D", "E", "知能情報"];

// 空配列の初期化 (型注釈を明示する)
const numArr3: number[] = [];
const strArr3: string[] = [];

// 「数値型」または「文字列型」を要素に持つ配列
// const arr1: (number | string)[] = ["one", 2, 3];