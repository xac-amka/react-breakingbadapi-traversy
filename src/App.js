import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  // we can't use async await directly in useEffect. So we use inside in.
  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
    // Whenever this query param is changed this useEffect is fire off again and again
  }, [query]); // when you use useEffect we need dependencies as second parameter

  return(
    <div className="container">
      <Header />
      <Search getQuery={ (q) => setQuery(q) } />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App;
