//01.Double using callback//

/*Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback.*/


function doublearray (arr , callback){
    const doubledarr = arr.map((num) =>{
        return callback(num);
    });
    return doubledarr;
}

const originalarray = [1,2,3,4];

function callback (num){
    return num * 2;
}

const doubledarray = doublearray(originalarray , callback);
console.log(doubledarray);


//02.String Manipulation//

/*Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
with the manipulated string or the new string to the console.*/


function manipulateString(inputstring , callback) {
    const manipulatedString = inputstring.toUpperCase();

    callback(manipulatedString);
}

function logstring(manipulatedstring) {
  console.log(`The manipulated string is: ${manipulatedstring}`);
}

manipulateString("Hello,World",logstring);



//03.Age in Days//

/*Write a function that takes in an array of integers and a callback function, and returns a new array where each
Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
name, and age in years as input. The function should concatenate the first and last name into a single string
and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
variable called ageInDays.*/

/*The ageInDays function should then return a callback function that logs a message to the console. The
message should include the person's full name and age in days, and should be in the format: "The person's full
name is [full name] and their age in days is [age in days]."*/

/*Note that the ageInDays function should not log the message to the console directly, but should instead return
a callback function that can be used to log the message at a later time.*/


const person = {
    firstName: "mithun",
    lastName: "S",
    age: 20,
};

function ageInDays (personobject , callback){
    const fullName = `${personobject.firstName} ${personobject.lastName}`;
    const ageInDays = personobject.age*365;
    callback(fullName, ageInDays);
}

function logresult(fullName , ageInDays){
    console.log(`The person's full name is: ${fullName} and thier age in days is:${ageInDays}`);
}

ageInDays(person,logresult);


//04.Arrange in alphabetical order//

/*Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.*/


const books = [
    {
        title: "The Great Gatsby",
        author: "F. scott Fitzgerald",
        year: 1925,
    },
    {
        title: "To kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
    },
    {
        title: "Who are you?",
        author: "George orwell",
        year: 1949,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
    },
];

function logtitles (titles){
    titles.sort();
    console.log(titles.join(","));
}

function extractfiles(books , callback) {
    const titles = books.map((book) => book.title);
    callback(titles);
}
extractfiles(books, logtitles);


//05.Greeting Promise//

/*You need to write a function that takes a name as input and returns a promise that resolves with a greeting
message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".*/


function greet (name){
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}!`;
        resolve (greeting)
    });
}

greet ("mithun")
.then((massage) => console.log(massage));


//06.Fetch results asynchronously//

/*Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.*/


async function fetchData() {
    const response = await
    fetch("https://jsonplaceholder.typecode.com/todos/1");
    const data = await response.json();
    console.log(data);
}

fetchData();


//07.Multiple requests//

/*Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs.*/


async function getcombinedData() {
    const [data1 , data2] = await Promise.all([
        fetch("https://jsonplaceholder.typecode.com/todos/1").then((response) =>
        response.json()
        ),

        fetch("https://jsonplaceholder.typecode.com/todos/1").then((response) =>
        response.json()
        ),
    ]);
    const combinedData = {
        todo: data1,
        post: data2,
    };
    return combinedData;
}

getcombinedData().then((data) => console.log(data));


//08.Get Data from API and Display it on the browser console//

/*Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
of posts, and then display them to the browser console.*/


                 //--------(solution is in html file in script 1)--------//




//09.Error Handling//

/*Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
to simulate an error, and then display an error message on the webpage.*/



                 //--------(solution is in html file in script 2)--------//
                 

