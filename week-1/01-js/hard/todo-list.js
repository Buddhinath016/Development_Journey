
/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todos = [];
  }

  add(todo){
    return this.todos.push(todo);
  }

  remove(index){
    if(index<0 || index>this.todos.length){
      return "Index out of length";
    }
    return this.todos.splice(index,1);
  }

  update(index, updatedTodo){
    if(index<0 || index > this.todos.length){
      return "Index out of length";
    }
    this.todos[index] = updatedTodo;
    return this;
  }

  getAll(){
    return this.todos;
  } 

  get(indexOfTodo){
    return this.todos[indexOfTodo];
  }

  clear(){
    return this.todos.length = 0;
  }
}

// Example usage:
const todoList = new Todo();

todoList.add("Buy groceries");
todoList.add("Walk the dog");
todoList.add("Pay bills");
console.log(todoList.getAll()); // Outputs: ["Buy groceries", "Walk the dog", "Pay bills"]

todoList.update(1, "Walk the dog in the park");
console.log(todoList.getAll()); // Outputs: ["Buy groceries", "Walk the dog in the park", "Pay bills"]

todoList.remove(2);
console.log(todoList.getAll()); // Outputs: ["Buy groceries", "Walk the dog in the park"]

console.log(todoList.get(0)); // Outputs: "Buy groceries"

// module.exports = Todo;
