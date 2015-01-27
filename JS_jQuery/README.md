#jQuery#

jQuery is a JavaScript library that makes it easy to interact with the DOM.

You can access it using `jQuery` or the shorthand `$`.

###Typical things we do with jQuery###
####Get and set the value of an input#####

`$('input').val()`


`$('input').val('my value')`


####Click on something or react to a click####
`$('button').click()`
```
$('button').click(function(){
    console.log('do something');
}
```


####Do something once the DOM has been loaded#####
```
$(document).ready(function(){
    console.log('document is ready');
}
```

### Aims for this lesson ###
* [Selectors](http://codylindley.com/jqueryselectors/)
* Removing / hiding elements
* Adding / removing classes (and what you can do with them)
* Running code when page is loaded
* Getting / setting values of elements

###Task 1 – Pet Shop###

#### 1.0 - Setup ####
*	Create an HTML document with Bootstrap and jQuery loaded
*	Add a `<h1>`Title to your page (the name of your shop)
*	Add pictures of kittens (hint: http://placekitten.com)

#### 1.1 – Selection####
* Practice removing a kitten / all kittens
* Practice highlighting a kitten (hint: try adding a class)
* Count how many kittens there are (hint: you need the length of the array)

N.B. By highlight, I mean emphasize in some way

#### 1.2 – Interaction####
*	Create a button to hide / show all the kittens
*	Add a text input and button. Update the Title of your shop with the input’s value when the button is clicked
*	Update the title automatically when the input is changed
*	Create a way to easily ‘open’ and ‘close’ the shop

#### 1.3 – Interaction 2####
*	Highlight a kitten on click (hint: `$(this)` )
*	Toggle a highlight when on click 
*	Highlight just that kitten on click 


#### 1.3.5 Animation ####
* Apply a different [jQuery animation](http://www.w3schools.com/jquery/jquery_animate.asp) to each of your kittens when clicked (hint: `.animate()`)
* Add [animate.css](http://daneden.github.io/animate.css/) to your project and use this to animate your kittens

####1.4 – Adding elements####
*	Create a button to add a kitten (hint: `.append`)
*	Create X number of kittens on page load


####1.5 – Dom and Data####
*	Create JSON kittens with at least `name`, `imageSrc` and `price` and loop through the kittens, creating them on page load
*	Assign data to the kittens represented in the DOM (hint: HTML data attribute)
*	On click, create a message with the kitten’s name e.g. “I like Fluffy the best’

####1.6 – Bootstrap Modals####
*	Treat clicking on the kittens as a purchase. Confirm the purchase with a bootstrap modal. User redirected to a new page if he confirms purchase.


