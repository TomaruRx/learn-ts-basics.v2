const grades: number[] = [1, 2, 3, 4, 5]; // 学年

// ▼▼▼ ここから
const gradeListItems = grades.map((grade: number): string => {
    return `<li>${grade}年</li>`;
});
// ▲▲▲ ここまでが着目してほしいところ

console.log(grades);
console.log(gradeListItems);