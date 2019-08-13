const express = require('express');
const router = express.Router();
const books = require("./books");

// Exercise #1
router.get("/", (req, res) => {
    res.status(200);
    res.send("Hello");
    res.end();
});

// Exercise #3
router.get("/books/all", (req, res) => {
    res.json(books);
    res.end();
});


// Exercise #3
router.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const foundBook = books.find((book) => {
        return book.id === id;
    });

    if (foundBook) {
        res.json(foundBook);
    } else {
        res.status(404).send();
    }

    res.end();
});


// Exercise #4
router.post("/books", (req, res) => {
    // Request looks like:
    // {
    // 	"book": {
    // 		"title": "new book",
    // 		"id": 5,
    // 		"author": "hello"
    // 	}
    // }
    const newBook = req.body.book;
    books.push(newBook);

    // Chaining
    // can also be like:
    // res.status(201)
    // res.send("Added book successfully!")
    res.status(201).send("Added book successfully!");
    res.end();
});


// Exercise #5
router.put("/books/:id", (req, res) => {
    // Remember that parameters passed in url always start off as string
    // Convert the string to a number with parseInt
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;

    console.log(`Book id to update: ${bookId}`);
    console.log(`Update book data: ${JSON.stringify(updatedBook)}`);

    let foundBookIndx = books.findIndex(book => {
        return book.id === bookId;
    });

    // findIndex returns -1 if the book id is not found
    // In this case, there is no book to update, so return 404, and return
    // so you don't continue on running the remainder of the function
    if (foundBookIndx < 0) {
        res.send(404).send();
        return;
    }

    // Update the book title in the list of books
    books[foundBookIndx].title = updatedBook.title;

    // Updates the book author. The || is an 'or' condition in case updatedBook.author
    // is undefined.
    books[foundBookIndx].author = updatedBook.author || books[foundBookIndx].author;

    res.send("Book successfully updated!");
    res.end();
});


// Exercise #6
router.delete("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    console.log(`Deleting book with id: ${bookId}`);

    let foundBookIndx = books.findIndex(book => {
        return book.id === bookId;
    });

    if (foundBookIndx < 0) {
        res.status(404).send();
        return;
    }

    books.splice(foundBookIndx, 1);

    res.send("Book deleted successfully!");
});

module.exports = router;