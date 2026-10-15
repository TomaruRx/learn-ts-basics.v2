const numArr: number[] = [10, 11, 12, 13];
console.log("初期状態 => " + numArr);

numArr.push(14); // 末尾に要素を追加
numArr.unshift(9); // 先頭に要素を追加
console.log("先頭と末尾に要素を追加した後 => " + numArr);

// インデックス 2 の位置に要素 (10.5) を挿入 ゼロオリジンに注意
numArr.splice(2, 0, 10.5);
console.log("インデックス 2 の位置に要素を挿入した後 => " + numArr);

numArr.pop(); // 末尾の要素を削除
console.log("末尾の要素を削除した後 => " + numArr);

// インデックス 4 の要素を削除
numArr.splice(4, 1);
console.log("インデックス 4 の要素を削除した後 => " + numArr);