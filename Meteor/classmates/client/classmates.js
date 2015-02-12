people = [
  {
    name: 'Ben',
    age: 26,
    gender: 'male',
    img: 'http://mestghana.wpengine.com/wp-content/uploads/2015/01/ben_jones-194ac759dbfa749cb340ba9abfab1733-gray-160x160.jpg',
    interests: [
      {
        name: 'Facebook',
        class: 'primary'
      },
      {
        name: 'Twitter',
        class: 'info'
      },
      {
        name: 'Google Plus',
        class: 'danger'
      }
    ]
  },
  {
    name: 'Tolu',
    age: 27,
    gender: 'female',
    img: 'http://mestghana.wpengine.com/wp-content/uploads/2014/10/Tolu-05a72dcde0ee41bb124edb4ec36cadb9-gray-160x160.png'
  },
  {
    name: 'Daisy',
    age: 27,
    gender: 'female',
    img: 'http://mestghana.wpengine.com/wp-content/uploads/2014/07/MESTDaisyChang2-97b3ebb5ea9e3e7b817920a88423a02e-160x160.png'
  }
]

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

Template.classmatesTemplate.events({
  'keydown #title': function (event,template) {
  },
  'click .btn-compliment': function (e,t){
    $('body').addClass('love');
  }
});