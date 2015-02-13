Template.registerHelper('things',function(){
	console.log(Things.find().fetch());

	// Array is 'naturally' returned by date created. Now the order's reversed.
	return Things.find().fetch().reverse();
})

Template.form.events({
	'submit form': function (e,t) {

		//Prevent page from reloading
		e.preventDefault();

		thing = {
			name: $('input').val()
		}

		//Check that 'name' is not an empty string
		if (thing.name){

			//Insert new doc into 'Things' collection
			Things.insert(thing);
		}

		//reset form
		$('input[type=text]').val('');
	}
});