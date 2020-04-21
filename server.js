// Dependencies
// =============================================================

const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App & PORT
// =============================================================
var app = express();
const PORT = 3001;
// Sets up the Express app to handle data parsing
// ================================================================================
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.get("/api/notes/:id", function (req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/api/notes", function (req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = req.body;
    let uniqueID = (savedNotes.length).toString();
    newNote.id = uniqueID;
    savedNotes.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    console.log("Note saved to db.json. Content: ", newNote);
    res.json(savedNotes);
})

app.delete("/api/notes/:id", function (req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteID = req.params.id;
    let newID = 0;
    console.log(`Deleting note with ID ${noteID}`);
    savedNotes = savedNotes.filter(currNote => {
        return currNote.id != noteID;
    })

    for (currNote of savedNotes) {
        currNote.id = newID.toString();
        newID++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes);
})
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})
