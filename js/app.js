import {setFilms,searchFilms} from './filmModel.js';
import {loadData} from './loadData.js';
import {validSearchTerm} from './validationFncs.js';



let filmsList; //<ul id="film-list"></ul>
let goBtn; // <button id="go-btn">GO</button>
let searchBox; //<input id="search-box" placeholder="Enter a film title">

window.addEventListener("load",loadData("./data/films.json",init));

function init(data){
  setFilms(data); //assign the loaded data to the films variables
  //get hold of HTML elements
  filmsList = document.querySelector("#film-list");
  goBtn = document.querySelector("#go-btn");
  searchBox = document.querySelector("#search-box");
  // add event listeners for the button and the search box
  goBtn.addEventListener("click",doSearch);
  searchBox.addEventListener("keyup",doSearch);
}

function doSearch()
{
  clearSearchResults();
  const searchTerm = searchBox.value;
  if(validSearchTerm(searchTerm)){
    const matchingFilms = searchFilms(searchTerm);
    displayResults(matchingFilms);
  }
}

function clearSearchResults(){
  while(filmsList.firstChild){
	    filmsList.removeChild(filmsList.firstChild);
	}
}

function displayResults(matchingFilms){
  const filmsFragment = document.createDocumentFragment();
  matchingFilms.forEach(function(film){
      const newLi = document.createElement("li");
      newLi.textContent = `${film.title} (${film.certificate})`;
      filmsFragment.appendChild(newLi);
  });
  filmsList.appendChild(filmsFragment);
}
