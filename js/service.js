var app = angular.module('quoteBook');

app.service('quoteService', function() {
	//debugger;//gets stuck in angular
	//array to store quotes
	var quotesArray = [

	{text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
	{text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
	{text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
	{text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    {text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    {text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    {text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	];

	//constructor object for adding and removing quotes
	this.getData = function(){
		return quotesArray;
	};
	this.addData = function(inputText, inputAuthor){
		quotesArray.push({text:inputText, author:inputAuthor});

	};
	this.removeData = function(data){
		for(var i = 0; i<quotesArray.length; i++) {
			if(data === quotesArray[i].text){
				quotesArray.splice(i,1);
			}
		}
	};
	


});
//Do you call the constructor by?
//DO NOT CREATE A VAR FOR THE CONSTRUCTOR OBJECT!!!