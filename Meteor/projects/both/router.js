Router.configure({
  layoutTemplate: "masterLayout",
  routeControllerNameConverter: "camelCase",
  notFoundTemplate: '404'
})

Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});

Router.route('/projects', function () {
  this.render('projects');
}, {
  name: 'projects',

  data: function() {                // Data context for the route. Allows properties of retuned
  	return {                        // objects to be rendered in tempate e.g. {{pageTitle}}
  		projects: Projects.find().fetch(), 
  		pageTitle: 'This is my project page'
  	}
  }
});

Router.route('/projects/:category/', function(){
	this.render('projects');          // Render the same template as '/projects' route
}, {
	name: 'projectsCategory',

	data: function(){
		return {                        // Return only documents with the category in the parameters
			projects: Projects.find({category: this.params.category}).fetch(),
			pageTitle: 'Category: ' + this.params.category
		}
	}
})

Router.route('/about', function () {
  this.render('about');
}, {
  name: 'about'
});