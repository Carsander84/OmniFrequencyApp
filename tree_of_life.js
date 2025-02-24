function findTreeOfLifePath() {
    let word = prompt("Enter a word to find its Tree of Life path:");
    if (!word) return;

    // Simple example using first letter as the path
    const paths = {
        "a": "Path 1 - Kether (Crown, Divine Inspiration)",
        "b": "Path 2 - Chokmah (Wisdom, Pure Creation)",
        "c": "Path 3 - Binah (Understanding, Structure)",
        "d": "Path 4 - Chesed (Mercy, Expansion)",
        "e": "Path 5 - Geburah (Strength, Severity)",
        "f": "Path 6 - Tiphareth (Beauty, Balance)",
        "g": "Path 7 - Netzach (Victory, Passion)",
        "h": "Path 8 - Hod (Splendor, Intellect)",
        "i": "Path 9 - Yesod (Foundation, Dreams)",
        "j": "Path 10 - Malkuth (Kingdom, Physical World)"
    };

    // Get first letter of input
    let firstLetter = word.charAt(0).toLowerCase();
    let path = paths[firstLetter] || "Unknown Path - No direct correspondence";

    alert(`The Tree of Life path for '${word}' is: ${path}`);
}
