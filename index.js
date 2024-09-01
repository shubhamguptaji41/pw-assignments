//Reverse A String// 

/*The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output*/


let input = "rajat kumar";

function reversestr(str){
    return str.split("").reverse().join("");
}

function reverseafterdelay(inputstr) {
    setTimeout(() => {
        let reversedstr = reversestr(inputstr);
        console.log("Reverse string:", reversedstr);
    }, 2000);
}

reverseafterdelay(input);




//Random Number Generator with Delay and Progress Indication//

/*The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number*/


// Define the delay in milliseconds (e.g., 4000 milliseconds = 4 seconds)
let delay = 4000;

// Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

// Function to display countdown messages and generate a random number after the delay
function generateRandomNumberAfterDelay(delay) {
  let remainingTime = delay / 1000; // Convert milliseconds to seconds

  let countdownInterval = setInterval(function() {
    console.log("Time remaining:", remainingTime, "seconds");

    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(countdownInterval); // Stop the countdown
      let randomNumber = generateRandomNumber();
      console.log("Random number generated:", randomNumber);
    }
  }, 1000); // Display a message every second
}

// Call the function with the specified delay
generateRandomNumberAfterDelay(5000);







//Build a feature for Store's Inventory//

/*Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees*/


// Define the exchange rate
const exchangeRateUSDToINR = 80;

// Define an array of item prices in USD
const itemPricesUSD = [20, 30, 45];

// Use the map function to convert prices to INR and create a new array
const itemPricesINR = itemPricesUSD.map(priceUSD => priceUSD * exchangeRateUSDToINR);

// Display the converted prices in INR
console.log("Prices in INR:", itemPricesINR);



//Filtering and Capitalizing: Books Published After 2010 with Author Names//

/*Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized*/


// Define a list of books with authors and publication years
const books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2015 },
    { title: "Book 3", author: "author 3", year: 2009 },
    { title: "Book 4", author: "author 4", year: 2011 },
    { title: "Book 5", author: "author 5", year: 2008 },
  ];
  
  // Filter and capitalize authors of books published after 2010
  const filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({
      title: book.title,
      author: book.author.toUpperCase(),
      year: book.year,
    }));
  
  // Display the filtered and capitalized books
  console.log("Filtered Books:", filteredBooks);



//URL validation//

/*Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not*/


// Define the regex pattern for valid URLs
const urlPattern = /^(https?:\/\/)[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[A-Za-z]+$/;

// Function to check if a string is a valid URL
function isValidURL(input) {
  return urlPattern.test(input);
}

// Test cases
const testURL01 = "http://www.example.com";
const testURL02 = "https://subdomain.example.co.uk";
const testURL03 = "ftp://invalid-url.com";

console.log("Test URL 1:", isValidURL(testURL01)); // Should print true
console.log("Test URL 2:", isValidURL(testURL02)); // Should print true
console.log("Test URL 3:", isValidURL(testURL03)); // Should print false



//LinkedIn Profile URL Validator//

/*As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters*/

/*The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not*/


// Define the regex pattern for valid LinkedIn profile URLs
const linkedInProfilePattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to check if a string is a valid LinkedIn profile URL
function isValidLinkedInProfileURL(input) {
  return linkedInProfilePattern.test(input);
}

// Test cases
const testURL1 = "https://www.linkedin.com/in/johndoe123";
const testURL2 = "https://www.linkedin.com/in/jane-smith";
const testURL3 = "https://www.linkedin.com/in/jack_anderson@123";
const testURL4 = "https://www.linkedin.com/company/acme-inc";

console.log("Test URL 1:", isValidLinkedInProfileURL(testURL1)); // Should print true
console.log("Test URL 2:", isValidLinkedInProfileURL(testURL2)); // Should print true
console.log("Test URL 3:", isValidLinkedInProfileURL(testURL3)); // Should print false
console.log("Test URL 4:", isValidLinkedInProfileURL(testURL4)); // Should print false