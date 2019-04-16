// exercise 1

// let isbn
// const fetch = function (isbn) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,//practice in postman for the right way to query
//         //ISBN is type, not a key, how did we know not to search isbn10-13 ??? good EXAMPLE at RUPG ---jona
//         // how do definde paths also on C:// and web
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }

//     })
// }
// console.log(fetch(9781945048470))

// Exercise 2


// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,//paths or query
//         success: function (data) {
//             console.log(data.items[0])
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }
// fetch("isbn", 9789814561778)
// console.log(fetch("isbn", 9789814561778)) // From Third World to First: The Singapore Story
// console.log(fetch("title", "How to Win Friends and Influence People")) // book by Dale Carnegie

// Exercise 3

const fetch = function (queryType, queryValue) {
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
            success: function (data) {
                let title = data.items[0].volumeInfo.title
                let author = data.items[0].volumeInfo.authors[0]
                let isbn = data.items[0].volumeInfo.industryIdentifiers[0].identifier
                console.log("Title - " +title+ ", Author - " +author+ ", ISBN - "+isbn)
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
    fetch("title", "The Wise Man's Fears")


// Exercise 3
// You will have noticed that the Google Books API returns its data in an items array - usually this array has data on more than one book.
// Modify your fetch function again so that instead of printing the entire data that is returned from the API, you print the title, author, and ISBN forEach of the books in items
// 


// Exercise 1
// Remember the fetch function from before? There we had the ISBN hard-coded on each call, which is not very useful.
// Instead, add a parameter to the function that accepts an ISBN, and modify your function so that it searches for info about the book with that ISBN.
// For instance, if you call fetch(9780575087057), you should receive data about the best book in the world: Name of the Wind.
// You can test your function with the following ISBNs, as well:
// •	9782806269171 - The Little Prince: Book Analysis
// •	1440633908 - Of Mice and Men by John Steinbeck
// •	9781945048470 - The Alchemist by Paulo Coelho
// •	9780307417138 - Hitchhiker's Guide to the Galaxy
// ________________________________________


// Exercise 2
// Now modify your function again so that it receives two parameters: queryType and queryValue
// You should modify your function to search by whatever queryType is (ISBN or title), with the value of whatever queryValue is.
// For instance, if you call fetch("title", "The Wise Man's Fears"), you should receive data about the book The Wise Man's Fears.
// You can test your function with the following, as well: