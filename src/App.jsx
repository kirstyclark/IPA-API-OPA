import CardList from './components/CardList';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import './styles.scss';

const App = () => {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers').then((response) => {
      return response.json();
    }).then((response) => {
      setBeers(response);
    })
  }, []);

  const fetchSearch = (searchText) => {
    if (searchText.length > 0 ) {
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchText}`).then((response) => {
        return response.json();
      }).then((response) => {
        console.log(response)
        setBeers(response);
      })
    } else {
      setBeers([]);
    }
  };

  const fetchAbv = () => {
    fetch(`https://api.punkapi.com/v2/beers?abv_gt=6`).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response)
      setBeers(response)
    })
  }

  return (
    <div className={styles.app}>
      <NavBar updateSearchText={fetchSearch} updateScale={fetchAbv}/>
      <CardList beers={beers}/>
    </div>
  )
}

export default App;