import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Countries from './components/Countries';

function App() {
  const [filter, setFilter] = useState("");

  const handleTextChange = (text) => {
    setFilter(text);
  }

  return (
    <div>
      <SearchBar label="Find countries:" handleTextChange={handleTextChange} />
      <Countries filter={filter} changeFilter={setFilter} />
    </div>
  );
}

export default App;
