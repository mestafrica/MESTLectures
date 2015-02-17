Template.registerHelper('things',function(){
	console.log(Things.find().fetch());

	// Array is 'naturally' returned by date created. Now the order's reversed.
	return Things.find().fetch().reverse();
})