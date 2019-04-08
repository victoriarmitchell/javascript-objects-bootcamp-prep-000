var playlist = {};
playlist['Tommy Genesis'] = 'Rainbow';

function updatePlaylist(playlist,artistName,songTitle) {
  playlist.artistName = 'songTitle';
  return playlist;
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName;
  return playlist;
}