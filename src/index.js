// write your code here
// read through the whole question once
// clone the repo
// open the html, read through it fully
// open the base url, read through it in detail.
// re-read the deliverables, exagerating, and looking at the code to think it through.
// write pseudocode


// core deliverables:
// 1.
// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. 
// Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// declare variables for the div and the base URL.
// grab the api data using fetch request
// grab the #ramen-menu div 

// OR

// select #ramen-menu div
// fetch ramens data, from /ramens endpoint
// iterate over ramens data, and for each ramen, create an image
    // create image tag
    // update src attribute
    // append to #ramen-menu div



const ramenMenu = document.querySelector('#ramen-menu');
console.log(ramenMenu);
const baseUrl = 'http://localhost:3000'



// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert 
// comment here and insert rating here.

// add event listener to each image in the #ramen-menu div
// have callback function that will update #ramen-detail div
    // select name, restaurant, image, rating and comment tags in #ramen-detail div
    // where does the ramen data come from? 
    // update all tags with correct information.

// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; 
// in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

// add submit event listener to the new-ramen form
// select #ramen-menu div
// select #new-ramen form
// callback function that will add the ramen to the #ramen-menu div
// select all input fields from form
// create image and add to ramen-menu div