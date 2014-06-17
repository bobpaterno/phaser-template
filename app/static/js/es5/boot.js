/* global game */
/* jshint unused: false */
'use strict';

var Game = {};

// initialize variables
var w = 800;
var h = 600;

var grid = [];
var columns = 13;
var rows = 13;

var Directions = { Up: 0, Right: 1, Down: 2, Left: 3 };

var hexColors = ['#aaccff', '#aaffcc', '#ccffaa', '#ccaaff', '#ffccaa', '#ffaacc'];

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
