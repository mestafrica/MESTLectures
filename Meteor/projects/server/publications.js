Meteor.publish('projects',function(){
	return Projects.find();
})

Meteor.publish('projectsByCategory',function(category){
	return Projects.find({category:category})
})

Meteor.publish('singleProject',function(_id){
	return Projects.find({_id:_id})
})

Meteor.publish('images',function(){
	return Images.find();
})

// Publishes applications for the user's job
Meteor.publish('applicationsByProject',function(_id){

	// _id is the _id of a projects
	project = Projects.findOne(_id);

	// check user is owner of project
	if (project.owner === this.userId){
		return Applications.find({project:_id});
	} else {
		return this.ready();
	}
})

Meteor.publish('myApplications',function(){
	return Applications.find({owner: this.userId});
})