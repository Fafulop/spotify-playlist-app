// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import Playlist from './components/Playlist';

function App() {
  // State for search results (mock data for now)
  const [searchResults, setSearchResults] = useState([]);
  // State for selected songs
  const [selectedSongs, setSelectedSongs] = useState([]);

  // Mock search function (replace with Spotify API call later)
  const handleSearch = (query) => {
    // Simulated API response
    const mockResults = [
      { id: '1', title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
      { id: '2', title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
      { id: '3', title: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
    ].filter(song => song.title.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(mockResults);
  };

  // Add song to playlist
  const handleSelectSong = (song) => {
    if (!selectedSongs.find(s => s.id === song.id)) {
      setSelectedSongs([...selectedSongs, song]);
    }
  };

  // Remove song from playlist
  const handleRemoveSong = (songId) => {
    setSelectedSongs(selectedSongs.filter(song => song.id !== songId));
  };

  // Mock upload to Spotify (replace with API call later)
  const handleUpload = () => {
    if (selectedSongs.length === 0) {
      alert('Please select at least one song to upload.');
      return;
    }
    alert('Playlist uploaded to Spotify!');
    setSelectedSongs([]); // Clear playlist after upload
  };

  return (
    <div className="app">
      <h1>Spotify Playlist Creator</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        <SongList songs={searchResults} onSelectSong={handleSelectSong} title="Search Results" />
        <Playlist songs={selectedSongs} onRemoveSong={handleRemoveSong} onUpload={handleUpload} />
      </div>
    </div>
  );
}

export default App;