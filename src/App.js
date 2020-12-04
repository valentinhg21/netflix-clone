import React from 'react';
import './App.css';
import Row from './components/Row.js';
import request from './requests.js';
import Banner from './components/Banner.js';
import Nav from './components/Nav.js';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
