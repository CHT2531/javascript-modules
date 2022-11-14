# JavaScript Modules
* Download the repository.
* View *index.html* in a browser (it will need to be on a web server because it uses the ```fetch()``` API)
* Open the files in a text editor

This is very similar to an example we looked at previously when we did a recap on the DOM. I have made some attempt to structure and organise the code using functions. Have a good look at the code, try and follow the order of execution i.e. what code is called and when, and see how each function does a single, focussed task.

> Although this makes good use of functions to organise the code. This example is far from perfect e.g.  it is heavily reliant on global variables.  

There are quite a few functions in this file, it would be nice if we could split the functions into separate modules, and *encapsulate* parts of the application.

One way of doing this would be to create a 'film model' module that handles the data in the application i.e. searching through the films.

Create a new JavaScript file, save it in the *js* folder as *filmModel.js*. Copy the following code into this file

```javascript
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

export {setFilms, searchFilms}; //exports the functions from the module
```

Back in *app.js*, add the following line of code at the top of the file

```javascript
import {setFilms, searchFilms} from './filmModel.js';
```
This will import the functions from *filmModel.js*. Next, in *app.js* comment out the line:

```javascript
let films; //Array of film objects
```
and comment out the function

```javascript
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
```
We don't need these anymore because they have been moved into the *filmModel* module. Next, change the following line of code in *app.js*.

```javascript
films = data; //assign the loaded data to the films variables
```
to
```javascript
setFilms(data); //assign the loaded data to the films variables
```

We've moved the ```films``` variable into the *filmModel.js*, so we won't be able to assign data to it. Instead we call the ```setFilms()``` function in *filmModel.js* to store the list of films.

Finally, in the HTML page, we need to specify that we are using modules. Change the ```<script>``` element to:

```html
<script type="module" src="js/app.js"></script>
```

Test the app still works. Have a good look through the code to fully understand what you have just done.

## On your own
* Can you create two more modules. One called *validationFncs.js*, this should contain the *validSearchTerm()* function, and another module called *loadData.js*. This should contain the *loadData()* function. You just need to copy the functions from *app.js*.
* You will need to export the functions from the modules and import them into *app.js*.
* You will also need to comment out the functions in *app.js* once you move over to using the modules.
