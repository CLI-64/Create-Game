'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3333';
const socket = io.connect(host);
const Player = require('./newplayer.js')
const players = {
  // this is where players are listed
}

socket.on('newPlayer', payload => {
  // Creates a new player
  players[payload] = new Player(payload)
})

socket.on('connect', payload => {
  socket.emit('play', '"Cartridge Name" plugged in! Type \'start\' when you are ready to play!')
  socket.emit('insert cartridge')
})

// After pressing enter
socket.on('play', payload => {
  // All game logic goes here
  socket.emit('play', ``)
})

socket.on('disconnect', payload => {

  // Clears players screen when disconnected from the console
  socket.emit('clear', 'x')
})

socket.on('runGame', payload => {
  // Start game here
})


function startGame(sentence) {

}