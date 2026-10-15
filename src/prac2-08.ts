const arr = ["Python", "C言語", "TypeScript", "C#"];
const arr2 = arr.map((value, index) => { // index の設定
  return `${index + 1}: ${value}`; // index の参照 (読み取り)
});
console.log(arr2);