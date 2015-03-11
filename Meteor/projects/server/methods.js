Meteor.methods({
    foo: function() {
    	// Remove 'random' project
        var _id = Projects.findOne()._id;
        Projects.remove(_id);
    }
})