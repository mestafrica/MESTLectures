### Meteor ###

List of learning resources: http://learn.meteorfactory.io/meteor-learning-resources/

### [Templates and Helpers](https://book.discovermeteor.com/chapter/templates) ###
HTML is broken up into [templates](http://docs.meteor.com/#/basic/defining-templates). Helpers connect HTML with JS.

### My class ###

#### 1.0 Create an array of objects representing class mates ####
* Create a new project, delte the initial files and create a client folder and `main.html`,`main.css` and `main.js` files
* Create an array of objects representing at least 5 classmates. Include name, age and gender
* Cycle through using `{{#each}}`

#### 1.1 {{#if}} gender ####
* Use an `{{#if}}` helper block to respect the person's gender

#### 1.2 {{#with}} myself ####
* Create a `me` variable that's an object with some properties about yourself
* Create a helper that return the 'you' object
* Use `{{#with}}` to get insde that object and print out some properties

#### 1.3 Helper functions ####
* Create a helper which accepts an argument. `isOver25 age` that returns true or false
* Use `{{#if}}` and integrate your helper into the app
