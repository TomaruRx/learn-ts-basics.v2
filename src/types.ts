// Todo型を定義
export type Todo = { // パスカルケース記述
    name: string;  // セミコロンで区切り
    priority: number;
    isDone: boolean;
    deadline: Date;
};