const priorities = [3, 1, 2, 1]; // 1〜3の値が格納された配列

// ここの処理を完成させる
const formattedPriorities = priorities.map((prioritie) => `★`.repeat(4 - prioritie)
);

console.log(priorities);
console.log(formattedPriorities);