

Template.classmatesTemplate.helpers({
  people: function () {
    return people;
  }
});

Template.gender.helpers({
  isMale: function (gender) {
    if (gender === 'male'){
      return true;
    }
  }
});

//Makes sure that 'isWinner' is false opposed to undefined
Session.setDefault('isWinner',false);

Template.classmatesTemplate.events({
  'keyup #enter-name': function (event,template) {
    var playerName = $(event.currentTarget).val();
    Session.set('playerName',playerName);
  },
  'click .btn-compliment': function (e,t){
    //The '!' changes true to false or false to true
    isWinner = ! Session.get('isWinner');
    Session.set('isWinner',isWinner);
  }
});