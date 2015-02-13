Template.registerHelper('things',function(){
	console.log(Things.find().fetch());

	return Things.find().fetch();
})

Template.things.events({
	'submit form': function (e,t) {
		
		//Prevent page from reloading
		e.preventDefault();

		thing = {
			name: $('input').val()
		}

		Things.insert(thing);

		//reset form
		$('input[type=text]').val('');
	}
});