import React from 'react';
import SongList from './SongList';

function Playlist({ songs, onRemoveSong, onUpload }) {
  return (
    <div className="playlist">
      <h2>Selected Songs</h2>
      <SongList songs={songs} onSelectSong={onRemoveSong} title="Selected Songs" />
      <button onClick={onUpload} disabled={songs.length === 0}>
        Upload to Spotify
      </button>
    </div>
  );
}

export default Playlist;