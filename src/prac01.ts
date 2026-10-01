// 文字列型 (string type) の変数 name の宣言と初期化
const name: string = "TypeScriptの勉強";
// 数値型 (number type) の変数 priority の宣言と初期化
const priority: number = 3;
console.log(name, priority); // console.log は可変長引数を受け取り可能
console.log(`Todo 1 => ${name}（優先度:${priority}）`);

// Date型の変数 deadline の宣言と初期化
// 2025年10月2日 14:15 で初期化したつもり
let deadline: Date = new Date(2025, 9, 2, 14, 15); // <- 0-origin
console.log(deadline); // 2025-10-02T05:15:00.000Z

function date2str(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}年${month}月${day}日 ${hours}時${minutes}分`;
}

console.log(
    `Todo 1 => ${name}（優先度:${priority})`,
    `期限:${date2str(deadline)}`
);


const todo = {
  name: "TypeScriptの勉強", // name = "..." ではない点に要注意
  priority: 3, // priority = "..." ではない点に要注意
};
console.log(`Todo 1 => ${todo.name}（優先度:${todo.priority}）`);

console.log(JSON.stringify(todo, null, 2));