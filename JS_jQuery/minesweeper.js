Game = {
	init: function(options){

		//Set the options as a property of the Game object
		this.options = options

		this.reset();
		this.addMines();
		this.bindClick();
	},
	addMines: function(){
		var i = 0;
		while (i < this.options.mineCount) {

			x = this.getRandomInt(0,this.options.xCount -1);
			y = this.getRandomInt(0,this.options.yCount -1);

			$gc = $('.gr:eq(' + y + ') .gc:eq('+ x + ')');

			// Only adds mine if doesn't have one
			if (!$gc.hasClass('mine')){
				$gc.addClass('mine')
			    i++;
			}
		}
	},
	bindClick: function(){
		self = this;

		$('.gc').click(function(){
			$(this).addClass('clicked')

			if ($(this).hasClass('mine')){
				self.endGame(false);
			}
		})

	},
	reset: function(){
		$('.gc').removeClass('clicked mine');
		$('.game-ended').removeClass('game-ended');
		$('.modal').modal('hide');
	},
	endGame: function(win){
		$('body').addClass('game-ended');

		if (win){
			this.win();
		} else {
			this.lose();
		}
	},
	lose: function(){
		$('#modal-failure').modal('show');
	},
	win: function(){
		alert('You win');
	},
	getRandomInt: function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

}


$(document).ready(function(){
	$('.play-again').click(function(){
	    Game.init(options)
	})
});