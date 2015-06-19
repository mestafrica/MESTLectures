Template.registerHelper('things',function(){
	console.log(Things.find().fetch());

	// Array is 'naturally' returned by date created. Now the order's reversed.

	return Things.find({}, {sort: {score: -1} });
})

Template.things.events({
	"click .upvote": function () {
			var postId = this._id;
			Things.update(postId, {$inc: {score: 1} });
	},

	"click .downvote": function () {
		var postId = this._id;
		Things.update(postId, {$inc: {score: -1} });
	}

});


Template.form.events({
	'submit form': function (e,t) {

		//Prevent page from reloading
		e.preventDefault();
		var currentUserId = Meteor.userId();

		thing = {
			name: $('input').val(),
			score: 0,
			createdBy: currentUserId
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

Template.email.helpers({
	userEmail: function(){
		var user = Meteor.user();
		return user.emails[0].address;
	}
});