/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
      this.todos = [];
    }
    add(todo){
      if(todo && typeof todo === 'string'){
        this.todos.push(todo);
      }else{
        console.log("Todo must be  a non - empty string.");
      }
    }

    remove(indexOfTodo){
      if(indexOfTodo>=0 && indexOfTodo < this.todos.length){
        this.todos.splice(indexOfTodo,1);
      }else{
        console.log("Invalid index");
      }
    }

    update(index,updatedTodo){
      if(index>=0&&index <this.todos.length){
        if(updatedTodo && typeof updatedTodo === 'string'){
          this.todos[index] = updatedTodo;
        }else{
          console.log("Updated todo must be a non-empty string");
        }
      }else{
        console.log("Invalid index");
      }
    }
    getAll(){
      return this.todos;
    }
    get(indexOfTodo){
      if(indexOfTodo>=0 && indexOfTodo<this.todos.length){
        return this.todos[indexOfTodo];
      }else{
        return null;
      }
    }
    clear(){
      this.todos = [];
  }
}

const todoApp = new Todo();
todoApp.add("Buy groceries");
todoApp.add("Complete homework");
todoApp.add("Walk the Dog");

console.log("All Todos:",todoApp.getAll());
todoApp.remove(0);
console.log("All Todos after removal:",todoApp.getAll());
todoApp.update(1,"Complete math homework");
console.log("updated Todo at index 1:",todoApp.get(1));
todoApp.clear();
console.log("All todos after clearing:",todoApp.getAll());

module.exports = Todo;
