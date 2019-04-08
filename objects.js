var playlist = {};
playlist['Tommy Genesis'] = 'Raibow';

function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
