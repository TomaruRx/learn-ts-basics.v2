// const deadline: Date = new Date(2025, 9, 2, 14, 15);
// const createdAt: Date = new Date(2025, 8, 25, 9, 45);

// const dlYear = deadline.getFullYear();
// const dlMonth = String(deadline.getMonth() + 1).padStart(2, "0");
// const dlDay = String(deadline.getDate()).padStart(2, "0");
// const dlHours = String(deadline.getHours()).padStart(2, "0");
// const dlMinutes = String(deadline.getMinutes()).padStart(2, "0");

// const caYear = createdAt.getFullYear();
// const caMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
// const caDay = String(createdAt.getDate()).padStart(2, "0");
// const caHours = String(createdAt.getHours()).padStart(2, "0");
// const caMinutes = String(createdAt.getMinutes()).padStart(2, "0");

// const str =
//     `期限 ${dlYear}/${dlMonth}/${dlDay} ${dlHours}:${dlMinutes} ` +
//     `(登録日 ${caYear}/${caMonth}/${caDay} ${caHours}:${caMinutes})`;
// console.log(str);

// ↓

// 関数の定義
// function date2str(dt: Date): string {
const date2str = (dt: Date): string => { // アロー関数形式
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    const hours = String(dt.getHours()).padStart(2, "0");
    const minutes = String(dt.getMinutes()).padStart(2, "0");
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}

const deadline: Date = new Date(2025, 9, 2, 14, 15);
const createdAt: Date = new Date(2025, 8, 25, 9, 45);

// 関数の呼出し (テンプレート文字列の内部)
const str = `期限 ${date2str(deadline)} (登録日 ${date2str(createdAt)})`;
console.log(str);