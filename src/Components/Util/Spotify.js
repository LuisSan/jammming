// const CLIENT_ID = 'd146bd0974844e8a8d80d03353d74756';
// const CLIENT_SECRET	= '569a6792f7fd47d39248d3ec2a2674fe';
// const REDIRECT_URI = 'http://localhost:3000/';
// const URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
// let accessToken;

// const Spotify = {
//   getAccessToken() {
//     if (accessToken) {
//         return new Promise(resolve => resolve(accessToken)); 
//     } else if (!accessToken){
//         let access_token = /access_token=([^&]*)/;
//         let expires_in = /expires_in=([^&]*)/; 
//         let URLuntoken = window.location.href;
//         URLuntoken.match(access_token, expires_in);
//         let accessToken = URLuntoken[0];
//         let expiresIn = URLuntoken[1];
//         if (accessToken && expiresIn) {
//             window.setTimeout(() => accessToken = '', expiresIn * 1000);
//             window.history.pushState('Access Token', null, '/');
//         } else {
//           return accessToken;
//         } 
//     } else { 
//         let response = window.location.redirect(URL, 302);
//         return response;
//     }
//   },
//   search(term) {
//     return Spotify.search().then(() => {
//       return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });
//   }).then(response => {
//     return response.json();
//   }).then(jsonResponse => {
//     if (jsonResponse.tracks) {
//       return jsonResponse.response.tracks.map((track) => ({
//           id: this.track.id,
//           name: this.track.name,
//           artist: this.track.artists[0].name,
//           album: this.track.album.name,
//           uri: this.track.uri
//         }));
//       }
//     });
//   },  
//   savePlaylist(playlistName, trackURIs) {
//     if(!playlistName || !trackURIs){
//       return;
//     } else {
//       let token = accessToken;
//       let headers = { 
//         Authorization : `Bearer ${accessToken}`,
//         userId : `${user_id}`
//       };
//       let userId = '';
//       const getUserid = () => {
//         const xhr = new XMLHttpRequest();
//         fetch ('https://api.spotify.com/v1/me', { headers: { headers }});
//         xhr.responseType = 'json';
//         xhr.onreadystatechange = () => {
//           if (xhr.readyState === XMLHttpRequest.DONE) {
//             const jsonResponse = getUserid.json();
//               return jsonResponse;
//           }
//         };
//         xhr.open('GET', getUserid);
//         xhr.send();
//         const createPlaylist = () => {
//           const urlToShorten = inputField.value;
//           const data = JSON.stringify({destination: urlToShorten})
//             fetch('https://api.spotify.com/v1/playlists/{playlist_id}/tracks', {
//             method : 'POST',
//             headers: {
//               'Content-type': 'application/json',
//               'token': apiKey
//             },
//             body: data
//           }).then(response => {
//             if (response.ok) {
//               return response.json();
//             }
//             throw new Error('Request failed!');
//           }, networkError => {
//             console.log(networkError.message)
//           }).then(jsonResponse => {
//             renderResponse(jsonResponse);
//           })
//         }

//       }
//     }
//   }
// }

// export default Spotify;