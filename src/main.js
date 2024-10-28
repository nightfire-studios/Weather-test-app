import {baseURL} from './base_url.js'

console.log(baseURL)

document.getElementById('fetchButton').addEventListener('click', fetchMessage);

async function fetchMessage() {
    try {
        const response = await fetch(`${baseURL}/message`); // Fetching from the server's URL
        
        // Ensure the response is OK (status 200)
        if (response.ok) {
            const text = await response.text(); // Get the response text
            document.getElementById('message').innerText = text; // Display it
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error('Error fetching message:', error);
        document.getElementById('message').innerText = 'Error fetching message.';
    }
}