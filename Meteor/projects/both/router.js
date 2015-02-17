Router.configure({
  layoutTemplate: "masterLayout",
  routeControllerNameConverter: "camelCase"
})

Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});

Router.route('/projects', function () {
  this.render('projects');
}, {
  name: 'projects'
});

Router.route('/about', function () {
  this.render('about');
}, {
  name: 'about'
});