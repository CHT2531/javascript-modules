// const filmModel = {
//   films:[],
//   init:function(data)
//   {
//   	this.films=data
//   },
//   searchFilms:function(searchTerm){
//     const matchingFilms = this.films.filter(function(film){
//       if(film.title.toLowerCase().search(searchTerm)>-1){
//         return true;
//       }else{
//         return false;
//       }
//     })
//     return matchingFilms;
//   }
// }

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
