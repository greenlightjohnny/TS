function showTodo(todo: { title: string; text: string }) {
  console.log(todo.title + ": " + todo.text);
}

let myTodo = { title: "Trash", text: "Take it outtt" };
showTodo(myTodo);

interface Todo2 {
  title: string;
  text: string;
}

function showTodo2(todo: Todo2) {
  console.log(todo.title + ": " + todo.text);
}
let myTodo2 = { title: "Trash", text: "Take it outtt" };
showTodo(myTodo2);

interface Person {
  name: string;
  hungry: boolean;
}

interface Person {
  youtuber: boolean;
}

const me: Person = {
  name: "Harry",
  hungry: false,
  youtuber: true,
};

// class Harry implements Person {
//   name: string;
//   hungry: boolean;
// }

// interface Greeting {
//   (name: string): string;
// }
// const myGreeting: Greeting = (name) => "Hello!";

type Person2 = {
  name: string;
  hungry: boolean;
};
const harry: Person2 = {
  name: "Harry",
};
