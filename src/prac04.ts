let deadline: Date = new Date(2025, 9, 2, 14, 15);

const year = deadline.getFullYear();
const month = String(deadline.getMonth() + 1).padStart(2, '0');
const day = String(deadline.getDate()).padStart(2, '0');
const hours = String(deadline.getHours()).padStart(2, '0');
const minutes = String(deadline.getMinutes()).padStart(2, '0');

console.log(`${year}/${month}/${day} ${hours}:${minutes}`);