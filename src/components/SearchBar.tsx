import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export function SearchBar(props: any ){
  const navigate = useNavigate(); 

    function KeyListener(e: any) {
      if(e.key === "Enter" && e.target.value !== ''){
        fetch(`https://rest.bandsintown.com/artists/${props.searchInput}?app_id=foo`)
          .then(res => res.json())
          .then(data => {
            console.log("data:" , data)
            if(data !== '' || data.error === "Not Found") {
              props.setSearchResult(data);
              navigate({
                pathname: '/searchResult',
                search: createSearchParams({
                  id: data.name
                }).toString(),
              });
            }
          })
      }
    }
  
    return ( 
    <header className="header" style={{color:'black'}}>
      <div className="logo">
      <img src={process.env.PUBLIC_URL + '/favicon.ico'} onClick={() =>{navigate('/')}}/>
      </div>
      <h2>EcoMusic</h2>
      <div className="searchBar">
        <img src="https://assets.prod.bandsintown.com/images/loupe.svg" className="searchIcon"/>
        <input type="text" className="searchInput" placeholder="Search for an artist" value={props.searchInput} onChange={(e) => {props.setSearchInput(e.target.value)}} onKeyDown={KeyListener} />
      </div>
  
      <button className="signIn"><h1>SignUp</h1></button>
    </header>
    )
   }