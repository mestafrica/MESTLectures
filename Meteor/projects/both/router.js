Router.configure({
  layoutTemplate: "masterLayout",
  routeControllerNameConverter: "camelCase"
})

Router.route('/', function () {
  this.render('home');
}, {
  name: 'home'
});

Router.route('/about', function () {
  this.render('about');
}, {
  name: 'about'
});