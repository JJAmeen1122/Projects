// Get references to the button and the container that holds the lyrics
const lyricsButton = document.getElementById('lyricsButton');
const lyricsContainer = document.getElementById('lyricsContainer');

// Add an event listener to the button
lyricsButton.addEventListener('click', function() {
    // Toggle the visibility of the lyrics container when the button is clicked
    if (lyricsContainer.style.display === "none") {
        lyricsContainer.style.display = "block"; // Show the lyrics
    } else {
        lyricsContainer.style.display = "none"; // Hide the lyrics
    }
});
// function showtext(){
//     document.getElementById("sounddata").innerHTML="features related data";
// }

document.getElementById('about').style.cursor = 'pointer';
document.getElementById('features').style.cursor = 'pointer';
function showAbout() {
    document.getElementById('about').style.display = 'block';
    document.getElementById('features').style.display = 'none';
}

function showFeatures() {
    document.getElementById('features').style.display = 'block';
    document.getElementById('about').style.display = 'none';
}