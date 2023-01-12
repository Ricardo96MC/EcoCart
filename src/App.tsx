import { useEffect, useState } from 'react';
import {SearchBar} from './components/SearchBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ArtistPage } from './pages/ArtistPage';


import './App.css';
import './Responsive.css'

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState<any | null>({});

  useEffect(() => {
  console.log("serachResult: ", searchResult)
    
  }, [searchResult])
  
return (
    <div className="App">
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} setSearchResult={setSearchResult}/>
      <div className="AppBody">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/searchResult' element={<ArtistPage
        artistSearchResult={searchResult}
        />} />
      </Routes>
    </div>
  </div>
  );
}
export default App;