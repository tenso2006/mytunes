// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);

    this.on('ended', this.playNext, this);

    this.on('dequeue', this.dequeue, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  playNext: function () {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },

  enqueue: function () {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function (song) {
    this.remove(song);
  }
});