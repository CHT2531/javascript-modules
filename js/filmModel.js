let films;

function setFilms(data){
  films = data;
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

export {setFilms, searchFilms};
