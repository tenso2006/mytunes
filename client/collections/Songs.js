// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  model: SongModel,

  initialize: function() {
    this.ajax();
  },

    

  ajax: function() {
    var context = this;
    Backbone.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log(context);

        for (var i = 0; i < data.results.length; i++) {
          //console.log(data);
          context.add(data.results[i]);
        }

      },
      error: function(data) {
        console.log('Sorry, it didn\'t work.');
      }
    });
  },

});
// url: data.results[i].url,
// title: data.results[i].title,
// artist: data.results[i].artist,
