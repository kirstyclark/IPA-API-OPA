import { getBeers, searchBeers, findStrong } from './services/beer.service.js';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import './styles.scss';
import Bubbles from './components/Bubbles/Bubbles.jsx';

const App = () => {

  const [beers, setBeers] = useState([]);

  useEffect(async () => {
    const beers = await getBeers();
    setBeers(beers);
  }, []);

  const fetchSearch = async (searchText) => {
    const beers = await searchBeers(searchText);
    setBeers(beers);
  };

  const fetchAbv = async () => {
    const beers = await findStrong();
    setBeers(beers);
  }

  const [listOrder, setOrder] = useState('');

  const order = (selectedChoice) => {
    if (setBeers !== []) {
      return setOrder(selectedChoice)
    }
  }

  return (
    <div className={`app ${styles.app}`}>
      <NavBar updateSearchText={fetchSearch} updateAbv={fetchAbv} updateOrder={order} />
      <CardList beers={beers} listOrder={listOrder} />
      <Bubbles/>
    </div>
  )
}

export default App;