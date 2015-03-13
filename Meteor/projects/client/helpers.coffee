Template.registerHelper 'User', ->
  Meteor.user()
  
Template.registerHelper 'ownProjectsCount', ->
  Projects.find(owner: Meteor.userId()).count()

Template.registerHelper 'categoryCount', (category)->
	Projects.find({category:category}).count()

Template.registerHelper 'Config', ->
	Config