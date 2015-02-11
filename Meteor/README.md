### Meteor ###

List of learning resources: http://learn.meteorfactory.io/meteor-learning-resources/


### [Templates and Helpers](https://book.discovermeteor.com/chapter/templates) ###
HTML is broken up into [templates](http://docs.meteor.com/#/basic/defining-templates). Helpers connect HTML with JS.

#### Breakdown a template ####
* Create a new Meteor project, delete the files and create a `client` folder
* Download an [agency template](http://ironsummitmedia.github.io/startbootstrap-agency/)
* Add a bootstrap package and a font awesome package (to make things easier for us)
* Break up each section into a separate template that's rendered in the body tag
* Static resources (not CSS or HTML) go in the top level `/public` folder

#### Kokiri Forest ####
Kokiri Forest is the first area in The Legend of Zelda: The Ocarina of Time. Your mission is to find a sword and a shield.

* In Kokiri forest, you smash pots to get rupees.
* You use rupees to buy a shield
* You find the sword in the area

![kokiri forest](http://www.zelda.com/ocarina3d/_ui/img/worldmap/screenshots/kokiri-forest-2.jpg)

##### 5.1 Setup #####
* Install a bookstrap package
* Create an inventory area which houses 2 items: the sword and the shield
* Create helpers that return true or false for `hasSword` and `hasShield`
* Create a helper count for no. of rupees

##### 5.2 Events #####
* Create 3 pots
* Add a `click` event to them which increases the rupee count by a 5, 10, 15

##### 5.3 Shop ######
* Setup a shop which sells a JSON array of objects e.g. `{name: 'Sword',price: 40}`
* Click on an item to buy it add add it to your inventory
