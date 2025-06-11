// src/components/SongList.js
import React from 'react';

function SongList({ songs, onSelectSong, title }) {
  return (
    <div className="song-list">
      <h2>{title}</h2>
      {songs.length === 0 ? (
        <p>No songs found.</p>
      ) : (
        <ul>
          {songs.map(song => (
            <li key={song.id}>
              <div>
                <strong>{song.title}</strong> by {song.artist} ({song.album})
              </div>
              <button onClick={() => onSelectSong(song)}>Select</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SongList;