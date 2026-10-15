const numArr: number[] = [10, 11, 12, 13];
console.log("初期状態 => " + numArr);

// 末尾に要素を追加
const addedToEnd = [...numArr, 14]; // スプレッド構文
console.log("末尾に要素を追加 => " + addedToEnd);

// 先頭に要素を追加
const addedToStart = [9, ...numArr]; // スプレッド構文
console.log("先頭に要素を追加 => " + addedToStart);

// インデックス n の位置に要素 (10.5) を挿入
const n = 2;
const insertedAtN = [...numArr.slice(0, n), 10.5, ...numArr.slice(n)];
console.log(`インデックス ${n} の位置に要素を挿入 => ` + insertedAtN);

