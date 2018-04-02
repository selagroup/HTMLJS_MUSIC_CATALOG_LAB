# HTML5 Music Catalog Lab

In this lab you will build a website for music artist catalog.

### Setup
- for this lab you will need to install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) that is bundled together with the node.js installer
- after installing and cloning this repo, open your terminal (CMD) and from inside the repo folder run:
``` bash
$ npm install
```

- Your work should be done in the starter folder. where you have some initial files already setup for you.
- to run your project in the server run in the terminal:
``` bash
$ npm start
```
this command fires up a static Node.js based http server that it's base folder is the starter folder.

- Solutions to every step are inside the matching step folder.
you can run the solutions by running the following npm command in your terminal:
``` bash
$ npm run step1
```
replace the last expression with the step number you would like to run.


### Step 1 - Basic HTML & CSS

In this step you will build the first 2 pages and initial layout of the website.
##### Layout
Each The page will consist of 2 sections:
- A top fixed navigation menu. In this step The menu should include 2 links, Home and Add Artist.
- the second section is will hold the content of each page.

##### Home Page
This page should include: 
- A list of music artist of your choice.
    -   Every item in the list should include  a link to the artist website with the artist name as the link text.
    Clicking on the link should open the artist website in a new tab. (use the target attribute).
    - the artist image.
The home page should be in an html file named ``index.html``

![alt text](https://user-images.githubusercontent.com/8056070/38086486-34219842-335d-11e8-8aad-4d9cccb578fd.png "Logo Title Text 1")


##### Add Artist
This page should display a from with following input fields:
- Artist Name
- Url - A url to the Artist Website.
- Image - a url to an artist image.
- Submit button


### Step 2  - Basic Javascript
In this step will create a new script file that holds a music artist array that acts as a database ( in the next steps this will be replaced by a remote data source ), and some functions for doing CRUD operations on the Array.

- Create a folder named js
- inside the folder create a javascript file named ``artist.js``
- include the file in the ``index.html`` with the appropriate ``<script>`` tag.

- inside the ``artist.js`` file create a global variable named artists and assign initialize it with an array of artists objects.
    - the artist object should be in the following schema: 
    ``` javascript  
         {
            id: 1,
            name:'Coldplay',
            Url:'http://coldplay.com',
            image:'https://www.nubimagazine.com/wp-content/uploads/2015/11/Coldplay-feat.jpg'
        }
    ``` 
    - for now the id value could be just a random value.
- in addition to the global ``artists`` collection, implement 5 functions
    - getAllArtists - returning the entire array.
    - getArtistById - returning a single artist by id
    - addArtist - adding a new artist to the array
    - deleteArtist - removing an artist from the array
    - updateArtist - updating an artist in the array.

- You can test your functions by browsing to the home page and invoking inside the chrome console. you can find more details on how to use the console [here](https://developers.google.com/web/tools/chrome-devtools/console/).


### Step 3 - DOM & Events
In this step you will add hover and click functionality to the artist list.
-   create a new ``home.js`` file under the js folder, and include it in the home page.
-  inside the ``home.js`` file implement the following:
    - When mouse is over an item in the list, the item should be highlighted with style of your choosing. the style should be removed when the mouse is no longer over the item.
    - When the user clicks on an item the item should be highlighted in a different way then when in over, and the over functionality should be disabled.
    a second click on an item will remove the highlighting style and restore the over functionality.
    - make sure to bind the events only when the DOM is loaded. use the ``DOMContentLoaded`` event.

### Step 4 - JS Rendering

In this step the artist list will be rendered with javascript when page loads.
- inside the ``home.js`` file implement the following:
    - use the ``getAllArtists`` implemented in step 2 to receive all artist.
    - for each item object create with javascript code the same HTML structure that is currently static.    


### Step 5 - Forms
In this step you will add validations to the ``addArtist.html`` form.

 - create a new file named ``validations.js``
 - make sure to load it in the ``addArtist.html`` file.
 - Create ``validateFrom`` function that accepts a form element as a parameter
    - the function should bind validation functions to the forms input
    -  to setup a validation, an attribute must be set on the input element:
        - the validation is set according to type or required attribute of the input field
        - you need to implement 2 validation functions
            1. required
            2. URL pattern validation.
        - if i have an input that i would like it to be a required field, i will just place a required attribute on the element. for a url validator i will change the input ``type`` value to 'Url'.
        - in order to disble HTML5 validation, place a ``novalidate`` attribute on the form element.
- The ``validateForm`` function should return an object with ``isValid`` method inside.
- The ``isValid`` method checks the validity of the entire form.
- you should use the ``isValid`` function inside the ``addartist.js`` file ti validate the form and 
- in the meantime if the form is invalid, alert the use with the ``alert()`` function. when the form is valid ``alert()`` the user that the form has been submitted.
- hint: listen to the ``submit`` event and at the end of the handler invoke the ``event.preventDefault`` function to stop the form from posting.

### Step6 - Async

In this step you will transform the ``artists`` file to get result from a remote api using the fetch api.

#### Http Server
From this step you will need to run server hosting the artist api.
To start the server:
- open another terminal (CMD) window, and go to the project folder.
- run:
```bash
$ npm run server
```
- the server is running on port 3000,
- the server follows restful practices, so for the `artists` resource you will be using
  the following endpoints
  ```
    Get All users - GET http://localhost:3000/artists
    Get Specific User - GET http://localhost:3000/artists/{id}
    Create user - POST http://localhost:3000/artists
    Update user - PUT http://localhost:3000/artists/{id}
    Delete user - DELETE http://localhost:3000/artists/{id}
  ```

#### Client
- Refactor the ``getAllArtists`` function to get the results from the api using the fetch api. 
- Refactor the ``addArtist`` function to post the results to the api with an HTTP POST request using the fetch api. 
The request should add an options object as second parameter to the fetch api.
``` javascript
{
    method:"POST",
    body:data //the data you are posting.
    headers:{ //http headers
        "content-type":"application/json"
    }

}
```
- in the ``addArtists.js``, inside the submit handler, replace the alerts from the previous step with a call to the addArtist function.
- you need to create another function that goes over the input field and collects the values to send to the ``addArtist`` function,and to the server. 
- you can iterate through all the input fields and build an object with the input's name as property name and the it's value as the property value. 
- Once the request is done, navigate back to the homepage by setting the ``location.href`` on the document object.
```javascript
    document.location.href = '/' //Url
```
### Step7 - location & string manipulation

In this step you will add Editing functionality using the existing Add artists form.

- in the home page, refactor the click handler of the artists list items, so that click will navigate to the ``addArtists`` form page, with artists id passed in the url as a query parameter.
For example, this what the url should look like:
``` javascript
/addArtist.html?id=23
``` 
- in the ``addArtist`` page you would need to check if an id parameter exists in the query string and get it's value. you will need parse the query string by using some string manipulation functions.
to read the query string from the url use:
```javascript
document.location.search //?id=23
```
- After you have id, use the ``getArtistById`` function to get the artist and pre populate the form with artist fetched from the api.
- The ``getArtistById`` should be refactored to fetch the artists from the api.

- refactor the ``updateArtist`` function to make a PUT request to api. it should be similar to 

- When the id parameter is passed to the form page, a submit should invoke the Update function and when there is no id it should use the add function.

### Step 8 - OOP

In this step you will refactor the app to implement some OOP and JS best practices.

- create a new file inside the js folder ``apiClient.js``
- In this file you need to implement a generic restful api client.
- the client should be written as a Module using an IIFE (Immediately-Invoked Function Expression ) to encapsulate private functionality and expose public functionality by returning an object or function.
``` javascript

const service =(function(){

    class somePrivateClass{
        constructor(){}
    }
    function privateFunc(){
        ...
    }

    const a_private = 'something Private';

    function PublicFunc{
        ...
    }

    return {
        prod: func
    }

}());

```

- the client will take a base url and implement the following methods:
    - getAll
    - getById
    - create
    - update
- Refactor the ``artists.js`` file to encapsulate all the existing functions inside an ``ArtistService`` module and refactor the functions to use the ``apiClient.js`` for invoking calls to the api. 











