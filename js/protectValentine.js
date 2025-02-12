function checkPassword() {
    // Get the input value
    const password = document.getElementById("password").value.toLowerCase(); 

    // Clue's correct password
    const correctPassword = "maicha";

    if (password === correctPassword) {
        // If password is correct, show the content
        document.getElementById("lock-screen").style.display = "none"; // Hide the lock screen
        // document.getElementById("content").style.display = "block"; // Show the main content
        document.getElementById("gif-container").style.display = "block";
        setTimeout(function() {
            document.getElementById("gif-container").style.display = "none"; // Hide the gif
            document.getElementById("content").style.display = "block"; // Show the main content
        }, 3000);
    } else {
        // If password is incorrect, show error message
        document.getElementById("error-message").innerText = "Incorrect password, please try again!";
    }
}

function yesClicked() {
    document.getElementById('message').innerHTML = "Yay! I'm so happy! 💖";
    document.getElementById('yes-btn').disabled = true;
    document.getElementById('no-btn').disabled = true;
    document.getElementById("gif-container2").style.display = "block";
    document.getElementById("content").style.display = "none";
    setTimeout(function() {
        document.getElementById("gif-container2").style.display = "none";
        window.location.href = "../jsProjects/valentineGame.html";  // Change this to your desired route
    }, 4000); // Wait for 2 seconds before redirecting
}

function noClicked() {
    const noButton = document.getElementById('no-btn');
    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * 80 + 10}%`; 
    noButton.style.top = `${Math.random() * 50 + 10}%`; 
    noButton.style.transition = 'all 0.5s ease-in-out';
}

// Get the button and the clue message
const clueButton = document.getElementById('clueButton');
const clueMessage = document.getElementById('clueMessage');

// Add an event listener to the button
clueButton.addEventListener('click', function() {
    // Check if the clue message is currently hidden
    if (clueMessage.style.display === 'none' || clueMessage.style.display === '') {
        // Slide down the clue message
        clueMessage.style.display = 'block';
        clueMessage.style.height = '0px';
        setTimeout(function() {
            clueMessage.style.height = 'auto';  // Allow it to expand naturally
        }, 10);  // Small delay to trigger the animation
    } else {
        // Slide up the clue message
        clueMessage.style.height = '0px';
        setTimeout(function() {
            clueMessage.style.display = 'none';  // Hide the message after sliding up
        }, 300);  // Time for the sliding effect to complete
    }
});