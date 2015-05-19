/* Load the HTTP library */
var http = require("http");

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://localhost:8888/callback'
});

spotifyApi.setAccessToken('BQCmrpZvuUfLkE3LIZGqhwc98yjQi_K8tBt9FRqpZfd1q7YCaXEbokDHXo6yEvxvhBu-9Q8XWbIAkghVExN-k0PVgBtl-SJeJCZMclAU4chdqJjrWHpOrsDxEZ5pCrodw9RVPsnJYLBI4BVHrUqiUzAVmPa4_I-R9ecx5_lidYz_dPQPM_p411La_Mt1aPdmpHyGY4ZpPFqiUD7n9X6SIiecYQR5TIX-fFNnXknVR7AWfjCXqxVNu33vUts4__rDCqbL0Wdoa_l3Yq0AR0zj611szLpqJphI78oKT3TRlip2JYR3');

// Get Elvis' albums
// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
//   .then(function(data) {
//     console.log('AAAAAAAAAAA Artist albums', data.body);
//   }, function(err) {
//     console.error(err);
//   });

// Get a user's playlists
// spotifyApi.getUserPlaylists('david.venin')
//   .then(function(data) {
//     console.log('Retrieved playlists', data.body);
//   },function(err) {
//     console.log('Something went wrong!', err);
//   });


// // Get tracks in a playlist
// spotifyApi.getPlaylistTracks('david.venin', '7gvtLWWpXVxQfIRtjkJk8n', { 'offset' : 1, 'limit' : 5, 'fields' : 'items' })
//   .then(function(data) {
//     console.log('The playlist contains these tracks', data.body);
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });

// Get tracks in a playlist
spotifyApi.getPlaylistTracks('thelinmichael', '3ktAYNcRHpazJ9qecm3ptn', { 'offset' : 1 })
  .then(function(data) {
  	console.log('data.track.uri', "testttttttt");
    console.log('The playlist contains these tracks', data.body);
  	console.log('data.track.uri', data.body.items);
  	console.log("ARFFFFFF");
  }, function(err) {
    console.log('Something went wrong!', err);
  });


/* Create an HTTP server to handle responses */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);