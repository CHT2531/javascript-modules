let films; //Array of film objects
let filmsList; //<ul id="film-list"></ul>
let goBtn; // <button id="go-btn">GO</button>
let searchBox; //<input id="search-box" placeholder="Enter a film title">

window.addEventListener("load",loadData("./data/films.json",init));

function init(data){
  films = data; //assign the loaded data to the films variables
  //get hold of HTML elements
  filmsList = document.querySelector("#film-list");
  goBtn = document.querySelector("#go-btn");
  searchBox = document.querySelector("#search-box");
  // add event listeners for the button and the search box
  goBtn.addEventListener("click",doSearch);
  searchBox.addEventListener("keyup",doSearch);
}

function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(data) {
		callback(data);
	});
}

function doSearch()
{
  clearSearchResults();
  const searchTerm = searchBox.value.toLowerCase();
  if(validSearchTerm(searchTerm)){
    const matchingFilms = searchFilms(searchTerm);
    displayResults(matchingFilms);
  }
}

function validSearchTerm(searchTerm){
  if(searchTerm.length >= 2){
    return true;
  }
  return false;
}

function searchFilms(searchTerm){
  const matchingFilms = films.filter(function(film){
    if(film.title.toLowerCase().search(searchTerm)>-1){
      return true;
    }else{
      return false;
    }
  })
  return matchingFilms;
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
