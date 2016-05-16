angular.module('todoApp', [])
.controller('TodoListController', function($scope) {
	var todoList = this;
	todoList.todoItems = [
		{name: 'Go to School'},
		{name: 'Eat lunch'},
		{name: 'Do laundry'},
		{name: 'Buy materials'}
	]

	todoList.addTodo = function() {
		todoList.todoItems.push(
			{name: todoList.todoText}
		)
		todoList.todoText = '';
	};

	todoList.remove = function() {
		var oldTodos = todoList.todoItems;
		todoList.todoItems = [];
		angular.forEach(oldTodos, function(todo) {
			if(!todo.done) todoList.todoItems.push(todo);
		})
		todoList.todoItems
	};

});