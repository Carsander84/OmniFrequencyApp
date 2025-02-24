document.getElementById("treeOfLifeButton").addEventListener("click", function() {
    let inputWord = document.getElementById("wordInput").value;
    let path = calculateTreeOfLifePath(inputWord);
    document.getElementById("treeOfLifeResult").innerText = "Your Path: " + path;
});

function calculateTreeOfLifePath(word) {
    // Add proper gematria mappings and return correct Tree of Life path
    let paths = {
        "wisdom": "Chokmah (Wisdom)",
        "crown": "Keter (Crown)",
        "understanding": "Binah (Understanding)",
        "strength": "Gevurah (Strength)",
        "beauty": "Tiferet (Beauty)",
        "victory": "Netzach (Victory)",
        "splendor": "Hod (Splendor)",
        "foundation": "Yesod (Foundation)",
        "kingdom": "Malkuth (Kingdom)"
    };
    return paths[word.toLowerCase()] || "Path not found";
}
