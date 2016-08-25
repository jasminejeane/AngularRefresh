angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){

$scope.learningNgChange = function(){

console.log("An input changed");
};

$scope.helloConsole = dataService.helloConsole;
$scope.todos = dataService.getTodos;

})
.service('dataService', function($http){
  this.helloConsole = function(){
    console.log("This is a hello console service");
  };

  this.getTodos = 
   $http.get('mock/todos.json')
  .then(function(response){
    console.log("This is response data", response.data);
    return response.data;
  });

});