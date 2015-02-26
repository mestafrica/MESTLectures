Template.registerHelper('User',function(){
	return Meteor.user();
})

Template.registerHelper('ownProjectsCount',function(){
	return Projects.find({owner: Meteor.userId()}).count()
})