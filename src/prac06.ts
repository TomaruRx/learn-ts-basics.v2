import dayjs from "dayjs";
import "dayjs/locale/ja";

const dtFmt = "YYYY/MM/DD(ddd) HH:mm";
const deadline: Date = new Date(2026, 9, 2, 14, 15);
const createdAt: Date = new Date(2026, 8, 25, 9, 45);

const str =
    `期限 ${dayjs(deadline).locale("ja").format(dtFmt)}` +
    `(登録日 ${dayjs(createdAt).locale("ja").format(dtFmt)})`;

console.log(str);