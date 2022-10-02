// Define the API URL as variable 
const DOG_URL = "https://dog.ceo/api/breeds/image/random"; // API Endpoint
const dogs = document.getElementById("dog-target");

// Define async function that fetches the dog image:
const addDog = async () => { 
    const response = await fetch(DOG_URL); // await response of fetch call
    const data = await response.json(); // await data returned from response
    const img = document.createElement("img"); // create img element
    img.src = data.message; // set img src to data returned from API
    img.alt = "Cute dog!"; // set img alt to "Cute dog!"
    dogs.appendChild(img); // append img to dog-target
}
document.getElementById("dog-btn").addEventListener("click", addDog); // add the event listener to the button
