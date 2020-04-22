# Note Taker

**Github URL**
https://github.com/shahidlashari/HW11

**Heroku URL** 

https://protected-island-13503.herokuapp.com/


## Description

* An application is used to write, save, and delete notes. This application uses an express backend and saves and retrieve note data from a JSON file.The following HTML routes have been created:

  * GET `/notes` -  Returns the `notes.html` file.

  * GET `*` - Returns the `index.html` file

* The application has a `db.json` file on the backend that stores and retrieves notes using the `fs` module.

* The following API routes have been created:

  * GET `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` - Receives a new note to save on the req.body, adds it to the `db.json` file, and then returns the new note to the user.

  * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete. It gives each note a unique `id` when it's saved. In order to delete a note, user needs to read all notes from the `db.json` file, also removes the note with the given `id` property, and then rewrites the notes to the `db.json` file.


## User Story

* Upon launching the app, users would be able to take persistent notes allows him to write, read and delete information available when needed.It allows users to create and save notes, view previously saved notes and delete previously saved notes.

## Technologies:-

    * HTML
    * CSS 
    * JQuery
    * Bootstrap
    * Visual Studio Code
    * NPM(Express,data parser, fs, jest, package json)
    * Local Port

## Challenges:-

* This activity was a bit difficult because saving the data to db.json file. I started my pseudo-code to work with. I went through lecture videos and also looking through a couple of examples online in order to understand jQuery code and day,date and time functions.

![image](public/assets/images/notetaker.gif)

