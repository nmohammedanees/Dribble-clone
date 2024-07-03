import React, { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Cardlist from './Components/Cardlist/Cardlist';
import data from './Components/data/data.json';
import Footer from './Components/Footer/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [sortOption, setSortOption] = useState('Following');
  const [category, setCategory] = useState('Discover');
  const [tagsearch,setTagsearch]=useState('');
  useEffect(() => {
    let filtered = data;

    if (searchTerm  ) {
      filtered = filtered.filter(card =>
        (card.name && card.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
        (card.authorname && card.authorname.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if(tagsearch){
      filtered = filtered.filter(card =>
      (card.tag && card.tag.toLowerCase().includes(tagsearch.toLowerCase())));
    }
    if (sortOption === 'Popular') {
      filtered = filtered.sort((a, b) => b.viewcount - a.viewcount);
    } else if (sortOption === 'NoteWorthy') {
      filtered = filtered.sort((a, b) => b.likecount - a.likecount);
    }

    if (category !== 'Discover') {
      filtered = filtered.filter(card => {
        return card.category && card.category.toLowerCase() === category.toLowerCase();
      });
    }


    
    setFilteredData(filtered);
    console.log('Filtered data:', filtered);
  }, [searchTerm, sortOption, category,tagsearch]);

  return (
    //<Router>
      <div className="App">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Menu setSortOption={setSortOption} sortOption={sortOption} category={category} setCategory={setCategory} tagsearch={tagsearch} setTagsearch={setTagsearch} />
        <Cardlist data={filteredData} />
        <Footer/>        
        </div>
  );
      // </Router>

}

export default App;
