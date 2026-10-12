import type { Todo } from "../types.js";

export const deepEqual = (todo1: Todo, todo2: Todo): boolean => {
    if (todo1 === todo2) {
        return true;
    }

    if (
        todo1.name === todo2.name &&
        todo1.priority === todo2.priority &&
        todo1.isDone === todo2.isDone &&
        todo1.deadline.getTime() === todo2.deadline.getTime()
    ) {
        return true;
    }

    return false;
};