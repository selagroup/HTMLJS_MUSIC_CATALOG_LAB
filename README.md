# HTML5 Music Catalog Lab

In this lab you will build a website for music artist catalog.

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

##### Add Artist
This page should display a from with following input fields:
- Artist Name
- Url - A url to the Artist Website.
- Image - a url to an artist image.
- Submit button

![alt text](https://user-images.githubusercontent.com/8056070/38086486-34219842-335d-11e8-8aad-4d9cccb578fd.png "Logo Title Text 1")

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


### Step 3
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

### Step6 - Async

### Step7 - Querystring

### Step 8 - OOP












