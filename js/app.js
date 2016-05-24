angular.module('todoApp', []) //creating the angular todoApp
.controller('TodoListController', function($scope) { //creating the function
	var todoList = this; //defining the variable "todoList"
	todoList.todoItems = [ //creates array called "todoList.todoitems"
		{name: 'Go to School', done: false}, //item 1 in list that is done false, or not done
		{name: 'Eat lunch', done: false}, //item 2 in list that is done false, or not done
		{name: 'Do laundry', done: false}, //item 3 in list that is done false, or not done
		{name: 'Buy materials', done: false} //item 4 in list that is done false, or not done
	] //array ends

	todoList.addTodo = function() { //creating a new function called "todoList.addTodo"
		todoList.todoItems.push( //when items are pushed
			{name: todoList.todoText, done: false} //they are done false, or not done
		)
		todoList.todoText = ''; // adds itens to array
	}; //function ends

	todoList.remove = function() { //creating function called "todoList.remove"
		var oldTodos = todoList.todoItems; //defining the variable "oldTodos"
		todoList.todoItems = []; // creates array
		angular.forEach(oldTodos, function(todo) { //creating function for each todo
			if(!todo.done) todoList.todoItems.push(todo); //if todo is not done it will be pushed onto list
		})
		//todoList.todoItems
	}; //function ends

	todoList.remaining = function() { //creating function called "todoList.remaining"
		var notCompletedCount = 0; //defining the variable "notCompletedCount"
		angular.forEach(todoList.todoItems, function(todo) { //creating function for each todo
			notCompletedCount += todo.done ? 0:1; //creates count for "todo.done"
		})
		return notCompletedCount // shows number not completed
	} //function ends

}); // app ends