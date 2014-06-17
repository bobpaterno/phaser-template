/* global game */
/* jshint unused: false */
'use strict';

var Game = {};

Game.Boot = function(game) {
   this.game = game;
};

Game.Boot.prototype = {
  preload: function () {
  	this.game.load.image('loadbar', 'img/loadbar.png');
  },

  create: function () {
    this.game.state.start('Load');
  }
};
