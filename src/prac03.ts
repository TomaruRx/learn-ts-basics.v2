const todo = {
    name: "TypeScriptの勉強",
    priority: 3,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};
console.log(todo.name);
console.log(todo.priority);
console.log(todo.isDone);
console.log(todo.deadline);
console.log(JSON.stringify(todo, null, 2)) 
console.log(typeof todo)